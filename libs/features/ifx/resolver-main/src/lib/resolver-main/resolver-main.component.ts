import { Component, computed, inject, OnInit, signal, Signal, ViewChild, WritableSignal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { ActivatedRoute, Router } from "@angular/router";
import { Filter, FilterCategory } from "@ncats-frontend-library/models/utils";
import { SharedUtilsListFilterRowComponent } from "@ncats-frontend-library/shared/utils/list-filter-row";
import { Store } from "@ngrx/store";
import { ResolverForm } from "ifx";
import { ResolverDataViewerComponent } from "resolver-data-viewer";
import { LoadResolverOptionsActions, ResolveQueryActions, ResolverSelectors } from "resolver-store";

@Component({
  selector: 'lib-resolver-main',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    SharedUtilsListFilterRowComponent,
    MatRadioModule,
    MatButtonModule,
    ResolverDataViewerComponent
  ],
  templateUrl: './resolver-main.component.html',
  styleUrl: './resolver-main.component.scss',
})
export class ResolverMainComponent implements OnInit {
  @ViewChild(SharedUtilsListFilterRowComponent, { static: false }) filtersRow!: SharedUtilsListFilterRowComponent;
  private readonly store = inject(Store);
  private router = inject(Router)
  private readonly route = inject(ActivatedRoute);
  resolveCtrl = new FormControl<string>('LARGEST');
  inputCtrl = new FormControl();
  inputVal = signal(null)
  options: Signal<Filter[] | undefined> = this.store.selectSignal(ResolverSelectors.selectResolverOptions);
  searchDisabled = computed(() => {
    console.log(this)
    console.log(this.filterOptionsList())
    console.log(this.inputCtrl.valueChanges.subscribe(change => console.log(change)))
    console.log(this.route.snapshot.queryParamMap)
      return this.inputVal() && (this.route.snapshot.queryParamMap.has('options') || this.filterOptionsList())
    }
  )

  optionCategories: Signal<FilterCategory[]> = computed(() => {
      const retMap: Map<string, FilterCategory> = new Map<string, FilterCategory>();
      this.options()?.forEach((opt: Filter) => {
        if (opt.tags) {
          opt.tags.forEach((tag: string) => {
            const parentArr: FilterCategory | undefined = retMap.get(tag);
            if (parentArr) {
              parentArr.values.push(opt);
              retMap.set(tag, parentArr);
            } else {
              retMap.set(tag, new FilterCategory({parent: tag, values:[opt]}));
            }
          });
        }
      })
      return Array.from(retMap.values());
    }
  )
  // filterOptionsList!: { [key: string]: Filter[] };
  filterOptionsList: WritableSignal<{ [key: string]: Filter[] }> = signal({});
  resolvedData = this.store.selectSignal(ResolverSelectors.selectAllResolver)

  ngOnInit(){
    console.log(this.inputCtrl.valueChanges.subscribe(val => this.inputVal.set(val)))
    if (this.route.snapshot && this.route.snapshot.queryParams) {
      const params = this.route.snapshot.queryParamMap;
      const optsString: string= <string>params.get('options')
      if(optsString) {
        const optsArr: string[] =   optsString.split(';');
        this.store.dispatch(LoadResolverOptionsActions.setPreviousFilters({ filters: optsArr }))
      }
      this.resolveCtrl.setValue(params.get('standardize'));
      this.inputCtrl.setValue(params.get('params'));
    }
  }

filterOptions(event: { [key: string]: Filter[] }) {
    console.log(event)
  this.searchDisabled()
  this.filterOptionsList.set(event)
}

resolve() {
  const formData: ResolverForm = new ResolverForm({
    structure: this.inputCtrl.value,
    format: 'json',
    standardize: this.resolveCtrl.value || "LARGEST"
  })
  let URL = ''

  console.log(this.filterOptionsList())
  if(!Object.keys(this.filterOptionsList()).length) {
    const tempObj: {[key: string]: Filter[]} = {};
      Object.keys(this.filtersRow.filterFormControls().controls).forEach(key=> tempObj[key] = this.filtersRow.filterFormControls().controls[key].value)
    this.filterOptionsList.set(tempObj)
  }

  Object.values(this.filterOptionsList()).forEach((category:Filter[]) => {
    category.forEach((filter: Filter) => {
      if (filter.value) {
        URL = URL + '/' + filter.value
      }
    })
  })


  localStorage.removeItem('previouslyUsedOptions');
  localStorage.setItem('previouslyUsedOptions', JSON.stringify((Object.values(this.filterOptionsList())).flat().map(fil=> fil.value)));
  this.store.dispatch(ResolveQueryActions.resolveQuery({urlStub: URL, form: formData}))
  // ?params=aspirin&options=inchikey;molExactMass;lychi1;lychi3;molExactMassParent;molFormParent;img&standardize=CHARGE_NORMALIZE
  this.router.navigate(
    [],
    {
      queryParams: {
        'params': this.inputCtrl.value,
        'options': (Object.values(this.filterOptionsList())).flat().map(fil=> fil.value).join(';'),
        'standardize': this.resolveCtrl.value
      },
      queryParamsHandling: 'merge'
    }
  );
}

/*  searchDisabled() {
      console.log(this)
      console.log(this.filterOptionsList())
      console.log(this.inputCtrl.valueChanges.subscribe(change => console.log(change)))
      console.log(this.route.snapshot.queryParamMap)
      return this.inputCtrl.value && (this.route.snapshot.queryParamMap.has('options') || this.filterOptionsList)
    }*/


  clearParams() {
  Object.values(this.filtersRow.filterFormControls().controls).forEach(control=> control.patchValue([]))
  }
}
