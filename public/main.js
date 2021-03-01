(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+dnt":
/*!******************************************************!*\
  !*** ./src/app/todo-create/todo-create.component.ts ***!
  \******************************************************/
/*! exports provided: TodoCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoCreateComponent", function() { return TodoCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_todo_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/todo-service.service */ "hjiI");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");








class TodoCreateComponent {
    constructor(TodoService) {
        this.TodoService = TodoService;
    }
    ngOnInit() { }
    onCreateTodo(form) {
        if (form.invalid) { }
        else {
            this.TodoService.postTodo(form.value.todo, false).subscribe((data) => {
                console.log(data);
                this.TodoService.getTodo().subscribe((data) => {
                    this.TodoService.putTodoInService(data);
                });
            });
            // alert("Todo Added");
            form.resetForm();
        }
    }
}
TodoCreateComponent.ɵfac = function TodoCreateComponent_Factory(t) { return new (t || TodoCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_todo_service_service__WEBPACK_IMPORTED_MODULE_1__["TodoServiceService"])); };
TodoCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoCreateComponent, selectors: [["app-todo-create"]], decls: 19, vars: 0, consts: [["rel", "preconnect", "href", "https://fonts.gstatic.com"], ["href", "https://fonts.googleapis.com/css2?family=Anton&display=swap", "rel", "stylesheet"], ["action", "", 1, "theform", 3, "submit"], ["todoform", "ngForm"], [1, "outerBox"], ["hideRequiredMarker", "", 1, "formfield"], ["matInput", "", "ngModel", "", "name", "todo", "type", "text", "required", ""], ["matSuffix", ""], ["align", "start"], ["mat-raised-button", "", "type", "submit"]], template: function TodoCreateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function TodoCreateComponent_Template_form_submit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.onCreateTodo(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Todo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Enter your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " CREATE TODO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatHint"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: ["mat-card[_ngcontent-%COMP%]{\r\n  width: 90vw;\r\n  margin:auto;\r\n height: 20vh;\r\nbackground: rgba(255, 255, 255, 0.062);\r\n}\r\n.theform[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.outerBox[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n.formfield[_ngcontent-%COMP%]{\r\n  width: 90%;\r\n  display: block;\r\n  margin:auto;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n  background-color: transparent;\r\n  border: 2px solid #4559ff;\r\n  color: #c125ff;\r\n  display: block;\r\n  font-size: 1.5rem;\r\n  font-family: 'Anton', sans-serif;\r\n  font-weight: 900;\r\n  width:90%;\r\n  margin:1rem auto;\r\n}\r\nmat-label[_ngcontent-%COMP%]{\r\n  color: #c125ff;\r\n}\r\n.mat-hint[_ngcontent-%COMP%] {\r\n  color:#c125ff ;\r\n}\r\n.mat-icon[_ngcontent-%COMP%]{\r\n  color:#c125ff;\r\n}\r\ninput[_ngcontent-%COMP%]{\r\n  color: #c125ff;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover{\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n  border: 2px solid #c125ff;\r\n  color:#4559ff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8tY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztDQUNaLFlBQVk7QUFDYixzQ0FBc0M7QUFDdEM7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxXQUFXO0FBQ2I7QUFDQTtFQUNFLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyx5QkFBeUI7RUFDekIsYUFBYTtBQUNmIiwiZmlsZSI6InRvZG8tY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZHtcclxuICB3aWR0aDogOTB2dztcclxuICBtYXJnaW46YXV0bztcclxuIGhlaWdodDogMjB2aDtcclxuYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2Mik7XHJcbn1cclxuLnRoZWZvcm17XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm91dGVyQm94e1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZm9ybWZpZWxke1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOmF1dG87XHJcbn1cclxuYnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0NTU5ZmY7XHJcbiAgY29sb3I6ICNjMTI1ZmY7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC1mYW1pbHk6ICdBbnRvbicsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICB3aWR0aDo5MCU7XHJcbiAgbWFyZ2luOjFyZW0gYXV0bztcclxufVxyXG5tYXQtbGFiZWx7XHJcbiAgY29sb3I6ICNjMTI1ZmY7XHJcbn1cclxuLm1hdC1oaW50IHtcclxuICBjb2xvcjojYzEyNWZmIDtcclxufVxyXG4ubWF0LWljb257XHJcbiAgY29sb3I6I2MxMjVmZjtcclxufVxyXG5pbnB1dHtcclxuICBjb2xvcjogI2MxMjVmZjtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjYzEyNWZmO1xyXG4gIGNvbG9yOiM0NTU5ZmY7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Pritam\Desktop\Projects\Projectbluecocoonwithserver\ProjectBluCocoon\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "MUi6":
/*!**************************************************!*\
  !*** ./src/app/todo-list/todo-list.component.ts ***!
  \**************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_todo_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/todo-service.service */ "hjiI");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "7KAL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "UhP/");






function TodoListComponent_label_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TodoListComponent_label_4_Template_input_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ele_r1 = ctx.$implicit; const i_r2 = ctx.index; const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.trigger(ele_r1.todo, _r3.checked, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ele_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("for", "todo_", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", i_r2 + 1, ". ", ele_r1.todo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "todo_", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ele_r1.isSelected);
} }
class TodoListComponent {
    constructor(todoService) {
        this.todoService = todoService;
        this.todo = [];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]();
    }
    trigger(selectedItem, isSelected, i) {
        console.log(isSelected);
        console.log('1');
        if (isSelected === true) {
            this.todoService.postSelectedItem(selectedItem, i).subscribe((data) => {
                this.todoService.postTodo(selectedItem, isSelected).subscribe((data) => { });
                console.log(data);
                this.todoService.getSelectedItems().subscribe(data => {
                    this.todoService.postSelectedTodoInService(data);
                });
            });
        }
        else {
            console.log("isSelected:" + isSelected);
            this.todoService.removeUnselectedItem(selectedItem, i).subscribe(data => {
                console.log(data);
                this.todoService.postTodo(selectedItem, isSelected).subscribe(() => { });
                this.todoService.getSelectedItems().subscribe(data => {
                    this.todoService.postSelectedTodoInService(data);
                });
            });
        }
    }
    ngOnInit() {
        console.log('inside onInit of todo list');
        this.todoService.getTodo().subscribe((data) => {
            this.todo = data;
        });
        this.subscription = this.todoService.getTodoFromService().subscribe((data) => {
            this.todo = data;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
TodoListComponent.ɵfac = function TodoListComponent_Factory(t) { return new (t || TodoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_todo_service_service__WEBPACK_IMPORTED_MODULE_2__["TodoServiceService"])); };
TodoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TodoListComponent, selectors: [["app-todo-list"]], decls: 5, vars: 1, consts: [["itemSize", "45px", 1, "outerBox"], ["matRipple", "", "class", "innerBox", 3, "for", 4, "cdkVirtualFor", "cdkVirtualForOf"], ["matRipple", "", 1, "innerBox", 3, "for"], [1, "innerItem"], ["type", "checkbox", "name", "todo", 1, "innerItem", "checkbox", 3, "id", "checked", "click"], ["checkbox", ""]], template: function TodoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Todos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "cdk-virtual-scroll-viewport", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TodoListComponent_label_4_Template, 5, 5, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkVirtualForOf", ctx.todo);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["CdkVirtualForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"]], styles: ["mat-card[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  background: rgba(255, 255, 255, 0.062);\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: #c125ff;\r\n  height: 3rem;\r\n  border: 1px solid #4559ff;\r\n\r\n}\r\n.outerBox[_ngcontent-%COMP%]{\r\n  height: 405px;\r\n  border: 2px solid #4559ff;\r\n}\r\n.innerBox[_ngcontent-%COMP%] {\r\n  border-top: 1px solid #4559ff;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  color:#1426bb;\r\n  background: rgba(255, 255, 255, 0.7);\r\n  width: 100%;\r\n  height: 45px;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.innerItem[_ngcontent-%COMP%] {\r\n  margin: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0Qyx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxZQUFZO0VBQ1oseUJBQXlCOztBQUUzQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLFlBQVk7RUFDWiw0RUFBNEU7QUFDOUU7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJ0b2RvLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNjIpO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNjMTI1ZmY7XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NTU5ZmY7XHJcblxyXG59XHJcbi5vdXRlckJveHtcclxuICBoZWlnaHQ6IDQwNXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0NTU5ZmY7XHJcbn1cclxuLmlubmVyQm94IHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzQ1NTlmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiMxNDI2YmI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDVweDtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcblxyXG4uaW5uZXJJdGVtIHtcclxuICBtYXJnaW46IDFyZW07XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _todo_create_todo_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-create/todo-create.component */ "+dnt");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "MUi6");
/* harmony import */ var _todo_selected_todo_selected_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-selected/todo-selected.component */ "UsRd");





class AppComponent {
    constructor() {
        this.title = 'ProjectBluCocoon';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [[1, "outsideAll"], [1, "outerBlock"], [1, "innerBlock"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-todo-create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-todo-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-todo-selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _todo_create_todo_create_component__WEBPACK_IMPORTED_MODULE_2__["TodoCreateComponent"], _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__["TodoListComponent"], _todo_selected_todo_selected_component__WEBPACK_IMPORTED_MODULE_4__["TodoSelectedComponent"]], styles: ["*[_ngcontent-%COMP%]{\r\n  height:100vh;\r\n}\r\n.outerBlock[_ngcontent-%COMP%]{\r\n\r\n  width: 100vw;\r\n  height:65vh;\r\n\r\n  margin-top: 1rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n.innerBlock[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  width:45%;\r\n}\r\n.outsideAll[_ngcontent-%COMP%]{\r\n  background: url('51400-pen-pexels.1200w.tn.jpg');\r\n  background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLFdBQVc7O0VBRVgsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7QUFDWDtBQUVBO0VBQ0UsZ0RBQThEO0VBQzlELHNCQUFzQjtBQUN4QiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgaGVpZ2h0OjEwMHZoO1xyXG59XHJcbi5vdXRlckJsb2Nre1xyXG5cclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OjY1dmg7XHJcblxyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmlubmVyQmxvY2t7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOjQ1JTtcclxufVxyXG5cclxuLm91dHNpZGVBbGx7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9pbWFnZS81MTQwMC1wZW4tcGV4ZWxzLjEyMDB3LnRuLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "UsRd":
/*!**********************************************************!*\
  !*** ./src/app/todo-selected/todo-selected.component.ts ***!
  \**********************************************************/
/*! exports provided: TodoSelectedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoSelectedComponent", function() { return TodoSelectedComponent; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_todo_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/todo-service.service */ "hjiI");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "7KAL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "UhP/");









const _c0 = ["virtualScroller"];
function TodoSelectedComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "strong", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ele_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("innerBox li_", i_r3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", i_r3 + 1, ". ", ele_r2.todo, "");
} }
class TodoSelectedComponent {
    constructor(todoService) {
        this.todoService = todoService;
        this.selectedTodo = [];
        this.testing = ["test 1", "test 2", "test 3", "test 4"];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
    }
    ngOnInit() {
        this.todoService.getSelectedItems().subscribe(data => {
            this.selectedTodo = data;
        });
        this.subscription = this.todoService.getSelectedTodoFromService().subscribe(data => {
            this.selectedTodo = data;
        });
    }
    dropped(event) {
        console.log(this.virtualScroller);
        const vsStartIndex = this.virtualScroller.getRenderedRange().start;
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(this.selectedTodo, event.previousIndex + vsStartIndex, event.currentIndex + vsStartIndex);
        this.todoService.indexingDraggedTodoBackend(this.selectedTodo).subscribe(data => { console.log(data); });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
TodoSelectedComponent.ɵfac = function TodoSelectedComponent_Factory(t) { return new (t || TodoSelectedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_todo_service_service__WEBPACK_IMPORTED_MODULE_3__["TodoServiceService"])); };
TodoSelectedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TodoSelectedComponent, selectors: [["app-todo-selected"]], viewQuery: function TodoSelectedComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.virtualScroller = _t.first);
    } }, decls: 6, vars: 2, consts: [["itemSize", "45px", "cdkDropList", "", 1, "outerBox", 3, "cdkDropListData", "cdkDropListDropped"], ["virtualScroller", ""], ["cdkDrag", "", "cdkDragLockAxis", "y", "matRipple", "", 3, "class", 4, "ngFor", "ngForOf"], ["cdkDrag", "", "cdkDragLockAxis", "y", "matRipple", ""], [1, "innerItem"]], template: function TodoSelectedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Selected Todo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "cdk-virtual-scroll-viewport", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function TodoSelectedComponent_Template_cdk_virtual_scroll_viewport_cdkDropListDropped_3_listener($event) { return ctx.dropped($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TodoSelectedComponent_li_5_Template, 3, 5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkDropListData", ctx.selectedTodo);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.selectedTodo);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkFixedSizeVirtualScroll"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDrag"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRipple"]], styles: ["mat-card[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  background: rgba(255, 255, 255, 0.062);\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: #c125ff;\r\n  height: 3rem;\r\n  border: 1px solid #4559ff;\r\n}\r\n\r\n.outerBox[_ngcontent-%COMP%] {\r\n  height: 405px;\r\n  border: 2px solid #4559ff;\r\n}\r\n\r\n.innerBox[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  border: 1px solid #4559ff;\r\n  align-items: center;\r\n  color:#1426bb;\r\n  background: rgba(255, 255, 255, 0.7);\r\n  width: 100%;\r\n  height: 45px;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.innerItem[_ngcontent-%COMP%]{\r\n  margin: 1rem;\r\n}\r\n\r\n\r\n\r\n.cdk-drop-list-dragging[_ngcontent-%COMP%]   .cdk-drag[_ngcontent-%COMP%] {\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n\r\n\r\n.cdk-drag-animating[_ngcontent-%COMP%] {\r\n  transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n\r\n.innerBox[_ngcontent-%COMP%]:hover{\r\n  cursor:pointer;\r\n}\r\n\r\n.innerBox[_ngcontent-%COMP%]:nth-child(2n+1){\r\n  background: chartreuse;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8tc2VsZWN0ZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEVBQTRFO0FBQzlFOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUNBLDJDQUEyQzs7QUFDM0M7RUFDRSxzREFBc0Q7QUFDeEQ7O0FBRUEsMkNBQTJDOztBQUMzQztFQUNFLHNEQUFzRDtBQUN4RDs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoidG9kby1zZWxlY3RlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYyKTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiAjYzEyNWZmO1xyXG4gIGhlaWdodDogM3JlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNDU1OWZmO1xyXG59XHJcblxyXG4ub3V0ZXJCb3gge1xyXG4gIGhlaWdodDogNDA1cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzQ1NTlmZjtcclxufVxyXG4uaW5uZXJCb3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ1NTlmZjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiMxNDI2YmI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDVweDtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcbi5pbm5lckl0ZW17XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG59XHJcbi8qIEFuaW1hdGUgaXRlbXMgYXMgdGhleSdyZSBiZWluZyBzb3J0ZWQuICovXHJcbi5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5jZGstZHJhZyB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4vKiBBbmltYXRlIGFuIGl0ZW0gdGhhdCBoYXMgYmVlbiBkcm9wcGVkLiAqL1xyXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuLmlubmVyQm94OmhvdmVye1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbi5pbm5lckJveDpudGgtY2hpbGQoMm4rMSl7XHJcbiAgYmFja2dyb3VuZDogY2hhcnRyZXVzZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _todo_create_todo_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-create/todo-create.component */ "+dnt");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "MUi6");
/* harmony import */ var _todo_selected_todo_selected_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todo-selected/todo-selected.component */ "UsRd");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _services_todo_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/todo-service.service */ "hjiI");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/scrolling */ "7KAL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "8Y7J");




//http additions

//components made by us




//Services

//CDK additions


//form additions

//Material additions







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_todo_service_service__WEBPACK_IMPORTED_MODULE_9__["TodoServiceService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["ScrollingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatRippleModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _todo_create_todo_create_component__WEBPACK_IMPORTED_MODULE_5__["TodoCreateComponent"],
        _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_6__["TodoListComponent"],
        _todo_selected_todo_selected_component__WEBPACK_IMPORTED_MODULE_7__["TodoSelectedComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["ScrollingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatRippleModule"]] }); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 6, vars: 0, consts: [["rel", "preconnect", "href", "https://fonts.gstatic.com"], ["href", "https://fonts.googleapis.com/css2?family=DotGothic16&display=swap", "rel", "stylesheet"], [1, "header"], ["src", "assets/image/ourlogo.png", "alt", "nop"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Todo List!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n  height: 10vh;\r\n  color: white;\r\n}\r\n.header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: flex-end;\r\n}\r\np[_ngcontent-%COMP%] {\r\n  height: 50%;\r\n  font-size: 2.5rem;\r\n  font-family: \"DotGothic16\", sans-serif;\r\n  font-weight: 500;\r\n  background: linear-gradient(to right, #c125ff, #8319ad, #4559ff);\r\n  -webkit-text-fill-color: transparent;\r\n  -webkit-background-clip: text;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsc0NBQXNDO0VBQ3RDLGdCQUFnQjtFQUNoQixnRUFBZ0U7RUFDaEUsb0NBQW9DO0VBQ3BDLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGhlaWdodDogMTB2aDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG5wIHtcclxuICBoZWlnaHQ6IDUwJTtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICBmb250LWZhbWlseTogXCJEb3RHb3RoaWMxNlwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYzEyNWZmLCAjODMxOWFkLCAjNDU1OWZmKTtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "hjiI":
/*!**************************************************!*\
  !*** ./src/app/services/todo-service.service.ts ***!
  \**************************************************/
/*! exports provided: TodoServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoServiceService", function() { return TodoServiceService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class TodoServiceService {
    constructor(http) {
        this.http = http;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        //main todo after creation stored in todo list from backend
        this.todoList = [];
        //For selected List
        //todos that are obtained from todo list after selection
        this.selectedTodos = [];
        this.subjectSelectedList = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    //used to get the create todo list to get the todo --createtodolist
    getTodo() {
        return this.http.get("todo/todo");
    }
    //used in todo list to get the whole todo list from service -- todo-list
    getTodoFromService() {
        return this.subject.asObservable();
    }
    //used in create todo list to put the todo created in service --createtodolist
    postTodo(obtainedtodo, isSelected) {
        let obj = { todo: obtainedtodo, isSelected: isSelected };
        console.log("inside post todo");
        return this.http.post("todo/todo", obj);
    }
    //used in create todolist to put the whole todo list in service --create todolist
    putTodoInService(data) {
        console.log("inside post todo in service");
        this.todoList = data;
        this.subject.next([...this.todoList]);
        console.log(this.todoList);
    }
    //this function gets the selected elements to todo-selected component
    getSelectedItems() {
        return this.http.get("todo/selectedtodo");
    }
    getSelectedTodoFromService() {
        return this.subjectSelectedList.asObservable();
    }
    //This function gets the selected item from the selectedlist
    postSelectedItem(selectedItem, i) {
        return this.http.post("todo/selectedtodo", { todo: selectedItem, index: i });
    }
    //this function removes the unselected number from the selectedlist
    removeUnselectedItem(selectedItem, i) {
        return this.http.delete(`todo/selectedtodo/${i}`);
    }
    //this gets called everytime a selected todo is either added or removed --todolist
    postSelectedTodoInService(data) {
        console.log("inside post todo in service");
        this.selectedTodos = data;
        this.subjectSelectedList.next([...this.selectedTodos]);
        console.log(this.selectedTodos);
    }
    //for storing dragged elements new index in db
    indexingDraggedTodoBackend(selectedTodos) {
        return this.http.post("todo/draggedtodo", selectedTodos);
    }
}
TodoServiceService.ɵfac = function TodoServiceService_Factory(t) { return new (t || TodoServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TodoServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TodoServiceService, factory: TodoServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map