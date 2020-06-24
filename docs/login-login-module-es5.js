function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js ***!
    \*******************************************************************************/

  /*! exports provided: MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup, MatButtonToggleGroupMultiple, MatButtonToggleModule */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015ButtonToggleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS", function () {
      return MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR", function () {
      return MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatButtonToggle", function () {
      return MatButtonToggle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatButtonToggleChange", function () {
      return MatButtonToggleChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatButtonToggleGroup", function () {
      return MatButtonToggleGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatButtonToggleGroupMultiple", function () {
      return MatButtonToggleGroupMultiple;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatButtonToggleModule", function () {
      return MatButtonToggleModule;
    });
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/button-toggle/button-toggle.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Represents the default options for the button toggle that can be configured
     * using the `MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS` injection token.
     * @record
     */


    var _c0 = ["button"];
    var _c1 = ["*"];

    function MatButtonToggleDefaultOptions() {}

    if (false) {}
    /**
     * Injection token that can be used to configure the
     * default options for all button toggles within an app.
     * @type {?}
     */


    var MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS');
    /**
     * Provider Expression that allows mat-button-toggle-group to register as a ControlValueAccessor.
     * This allows it to support [(ngModel)].
     * \@docs-private
     * @type {?}
     */

    var MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatButtonToggleGroup;
      }),
      multi: true
    };
    /**
     * @deprecated Use `MatButtonToggleGroup` instead.
     * \@breaking-change 8.0.0
     */

    var MatButtonToggleGroupMultiple = function MatButtonToggleGroupMultiple() {
      _classCallCheck(this, MatButtonToggleGroupMultiple);
    };
    /** @type {?} */


    var _uniqueIdCounter = 0;
    /**
     * Change event object emitted by MatButtonToggle.
     */

    var MatButtonToggleChange =
    /**
     * @param {?} source
     * @param {?} value
     */
    function MatButtonToggleChange(source, value) {
      _classCallCheck(this, MatButtonToggleChange);

      this.source = source;
      this.value = value;
    };

    if (false) {}
    /**
     * Exclusive selection button toggle group that behaves like a radio-button group.
     */


    var MatButtonToggleGroup = /*#__PURE__*/function () {
      /**
       * @param {?} _changeDetector
       * @param {?=} defaultOptions
       */
      function MatButtonToggleGroup(_changeDetector, defaultOptions) {
        _classCallCheck(this, MatButtonToggleGroup);

        this._changeDetector = _changeDetector;
        this._vertical = false;
        this._multiple = false;
        this._disabled = false;
        /**
         * The method to be called in order to update ngModel.
         * Now `ngModel` binding is not supported in multiple selection mode.
         */

        this._controlValueAccessorChangeFn =
        /**
        * @return {?}
        */
        function () {};
        /**
         * onTouch function registered via registerOnTouch (ControlValueAccessor).
         */


        this._onTouched =
        /**
        * @return {?}
        */
        function () {};

        this._name = "mat-button-toggle-group-".concat(_uniqueIdCounter++);
        /**
         * Event that emits whenever the value of the group changes.
         * Used to facilitate two-way data binding.
         * \@docs-private
         */

        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the group's value changes.
         */

        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
      }
      /**
       * `name` attribute for the underlying `input` element.
       * @return {?}
       */


      _createClass(MatButtonToggleGroup, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](this.multiple, undefined, false);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this$_selectionModel;

          (_this$_selectionModel = this._selectionModel).select.apply(_this$_selectionModel, _toConsumableArray(this._buttonToggles.filter(
          /**
          * @param {?} toggle
          * @return {?}
          */
          function (toggle) {
            return toggle.checked;
          })));
        }
        /**
         * Sets the model value. Implemented as part of ControlValueAccessor.
         * @param {?} value Value to be set to the model.
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.value = value;

          this._changeDetector.markForCheck();
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._controlValueAccessorChangeFn = fn;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
        /**
         * Dispatch change event with current selection and group value.
         * @return {?}
         */

      }, {
        key: "_emitChangeEvent",
        value: function _emitChangeEvent() {
          /** @type {?} */
          var selected = this.selected;
          /** @type {?} */

          var source = Array.isArray(selected) ? selected[selected.length - 1] : selected;
          /** @type {?} */

          var event = new MatButtonToggleChange(
          /** @type {?} */
          source, this.value);

          this._controlValueAccessorChangeFn(event.value);

          this.change.emit(event);
        }
        /**
         * Syncs a button toggle's selected state with the model value.
         * @param {?} toggle Toggle to be synced.
         * @param {?} select Whether the toggle should be selected.
         * @param {?=} isUserInput Whether the change was a result of a user interaction.
         * @param {?=} deferEvents Whether to defer emitting the change events.
         * @return {?}
         */

      }, {
        key: "_syncButtonToggle",
        value: function _syncButtonToggle(toggle, select) {
          var _this = this;

          var isUserInput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var deferEvents = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

          // Deselect the currently-selected toggle, if we're in single-selection
          // mode and the button being toggled isn't selected at the moment.
          if (!this.multiple && this.selected && !toggle.checked) {
            /** @type {?} */
            this.selected.checked = false;
          }

          if (this._selectionModel) {
            if (select) {
              this._selectionModel.select(toggle);
            } else {
              this._selectionModel.deselect(toggle);
            }
          } else {
            deferEvents = true;
          } // We need to defer in some cases in order to avoid "changed after checked errors", however
          // the side-effect is that we may end up updating the model value out of sequence in others
          // The `deferEvents` flag allows us to decide whether to do it on a case-by-case basis.


          if (deferEvents) {
            Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              return _this._updateModelValue(isUserInput);
            });
          } else {
            this._updateModelValue(isUserInput);
          }
        }
        /**
         * Checks whether a button toggle is selected.
         * @param {?} toggle
         * @return {?}
         */

      }, {
        key: "_isSelected",
        value: function _isSelected(toggle) {
          return this._selectionModel && this._selectionModel.isSelected(toggle);
        }
        /**
         * Determines whether a button toggle should be checked on init.
         * @param {?} toggle
         * @return {?}
         */

      }, {
        key: "_isPrechecked",
        value: function _isPrechecked(toggle) {
          if (typeof this._rawValue === 'undefined') {
            return false;
          }

          if (this.multiple && Array.isArray(this._rawValue)) {
            return this._rawValue.some(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return toggle.value != null && value === toggle.value;
            });
          }

          return toggle.value === this._rawValue;
        }
        /**
         * Updates the selection state of the toggles in the group based on a value.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_setSelectionByValue",
        value: function _setSelectionByValue(value) {
          var _this2 = this;

          this._rawValue = value;

          if (!this._buttonToggles) {
            return;
          }

          if (this.multiple && value) {
            if (!Array.isArray(value)) {
              throw Error('Value must be an array in multiple-selection mode.');
            }

            this._clearSelection();

            value.forEach(
            /**
            * @param {?} currentValue
            * @return {?}
            */
            function (currentValue) {
              return _this2._selectValue(currentValue);
            });
          } else {
            this._clearSelection();

            this._selectValue(value);
          }
        }
        /**
         * Clears the selected toggles.
         * @private
         * @return {?}
         */

      }, {
        key: "_clearSelection",
        value: function _clearSelection() {
          this._selectionModel.clear();

          this._buttonToggles.forEach(
          /**
          * @param {?} toggle
          * @return {?}
          */
          function (toggle) {
            return toggle.checked = false;
          });
        }
        /**
         * Selects a value if there's a toggle that corresponds to it.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_selectValue",
        value: function _selectValue(value) {
          /** @type {?} */
          var correspondingOption = this._buttonToggles.find(
          /**
          * @param {?} toggle
          * @return {?}
          */
          function (toggle) {
            return toggle.value != null && toggle.value === value;
          });

          if (correspondingOption) {
            correspondingOption.checked = true;

            this._selectionModel.select(correspondingOption);
          }
        }
        /**
         * Syncs up the group's value with the model and emits the change event.
         * @private
         * @param {?} isUserInput
         * @return {?}
         */

      }, {
        key: "_updateModelValue",
        value: function _updateModelValue(isUserInput) {
          // Only emit the change event for user input.
          if (isUserInput) {
            this._emitChangeEvent();
          } // Note: we emit this one no matter whether it was a user interaction, because
          // it is used by Angular to sync up the two-way data binding.


          this.valueChange.emit(this.value);
        }
      }, {
        key: "name",
        get: function get() {
          return this._name;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          var _this3 = this;

          this._name = value;

          if (this._buttonToggles) {
            this._buttonToggles.forEach(
            /**
            * @param {?} toggle
            * @return {?}
            */
            function (toggle) {
              toggle.name = _this3._name;

              toggle._markForCheck();
            });
          }
        }
        /**
         * Whether the toggle group is vertical.
         * @return {?}
         */

      }, {
        key: "vertical",
        get: function get() {
          return this._vertical;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
        /**
         * Value of the toggle group.
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          /** @type {?} */
          var selected = this._selectionModel ? this._selectionModel.selected : [];

          if (this.multiple) {
            return selected.map(
            /**
            * @param {?} toggle
            * @return {?}
            */
            function (toggle) {
              return toggle.value;
            });
          }

          return selected[0] ? selected[0].value : undefined;
        }
        /**
         * @param {?} newValue
         * @return {?}
         */
        ,
        set: function set(newValue) {
          this._setSelectionByValue(newValue);

          this.valueChange.emit(this.value);
        }
        /**
         * Selected button toggles in the group.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          /** @type {?} */
          var selected = this._selectionModel ? this._selectionModel.selected : [];
          return this.multiple ? selected : selected[0] || null;
        }
        /**
         * Whether multiple button toggles can be selected.
         * @return {?}
         */

      }, {
        key: "multiple",
        get: function get() {
          return this._multiple;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether multiple button toggle group is disabled.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);

          if (this._buttonToggles) {
            this._buttonToggles.forEach(
            /**
            * @param {?} toggle
            * @return {?}
            */
            function (toggle) {
              return toggle._markForCheck();
            });
          }
        }
      }]);

      return MatButtonToggleGroup;
    }();

    MatButtonToggleGroup.ɵfac = function MatButtonToggleGroup_Factory(t) {
      return new (t || MatButtonToggleGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, 8));
    };

    MatButtonToggleGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatButtonToggleGroup,
      selectors: [["mat-button-toggle-group"]],
      contentQueries: function MatButtonToggleGroup_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatButtonToggle, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._buttonToggles = _t);
        }
      },
      hostAttrs: ["role", "group", 1, "mat-button-toggle-group"],
      hostVars: 5,
      hostBindings: function MatButtonToggleGroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-disabled", ctx.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-button-toggle-vertical", ctx.vertical)("mat-button-toggle-group-appearance-standard", ctx.appearance === "standard");
        }
      },
      inputs: {
        appearance: "appearance",
        name: "name",
        vertical: "vertical",
        value: "value",
        multiple: "multiple",
        disabled: "disabled"
      },
      outputs: {
        valueChange: "valueChange",
        change: "change"
      },
      exportAs: ["matButtonToggleGroup"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
        provide: MatButtonToggleGroupMultiple,
        useExisting: MatButtonToggleGroup
      }])]
    });
    /** @nocollapse */

    MatButtonToggleGroup.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
        }]
      }];
    };

    MatButtonToggleGroup.propDecorators = {
      _buttonToggles: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return MatButtonToggle;
        }), {
          // Note that this would technically pick up toggles
          // from nested groups, but that's not a case that we support.
          descendants: true
        }]
      }],
      appearance: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      vertical: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      valueChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      multiple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      change: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatButtonToggleGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: 'mat-button-toggle-group',
          providers: [MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
            provide: MatButtonToggleGroupMultiple,
            useExisting: MatButtonToggleGroup
          }],
          host: {
            'role': 'group',
            'class': 'mat-button-toggle-group',
            '[attr.aria-disabled]': 'disabled',
            '[class.mat-button-toggle-vertical]': 'vertical',
            '[class.mat-button-toggle-group-appearance-standard]': 'appearance === "standard"'
          },
          exportAs: 'matButtonToggleGroup'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
          }]
        }];
      }, {
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        appearance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        vertical: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        _buttonToggles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return MatButtonToggle;
          }), {
            // Note that this would technically pick up toggles
            // from nested groups, but that's not a case that we support.
            descendants: true
          }]
        }]
      });
    })();

    if (false) {} // Boilerplate for applying mixins to the MatButtonToggle class.

    /**
     * \@docs-private
     */


    var MatButtonToggleBase = function MatButtonToggleBase() {
      _classCallCheck(this, MatButtonToggleBase);
    };
    /** @type {?} */


    var _MatButtonToggleMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisableRipple"])(MatButtonToggleBase);
    /**
     * Single button inside of a toggle group.
     */


    var MatButtonToggle = /*#__PURE__*/function (_MatButtonToggleMixin) {
      _inherits(MatButtonToggle, _MatButtonToggleMixin);

      var _super = _createSuper(MatButtonToggle);

      /**
       * @param {?} toggleGroup
       * @param {?} _changeDetectorRef
       * @param {?} _elementRef
       * @param {?} _focusMonitor
       * @param {?} defaultTabIndex
       * @param {?=} defaultOptions
       */
      function MatButtonToggle(toggleGroup, _changeDetectorRef, _elementRef, _focusMonitor, // @breaking-change 8.0.0 `defaultTabIndex` to be made a required parameter.
      defaultTabIndex, defaultOptions) {
        var _this4;

        _classCallCheck(this, MatButtonToggle);

        _this4 = _super.call(this);
        _this4._changeDetectorRef = _changeDetectorRef;
        _this4._elementRef = _elementRef;
        _this4._focusMonitor = _focusMonitor;
        _this4._isSingleSelector = false;
        _this4._checked = false;
        /**
         * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
         */

        _this4.ariaLabelledby = null;
        _this4._disabled = false;
        /**
         * Event emitted when the group value changes.
         */

        _this4.change = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /** @type {?} */

        var parsedTabIndex = Number(defaultTabIndex);
        _this4.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
        _this4.buttonToggleGroup = toggleGroup;
        _this4.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
        return _this4;
      }
      /**
       * Unique ID for the underlying `button` element.
       * @return {?}
       */


      _createClass(MatButtonToggle, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          /** @type {?} */
          var group = this.buttonToggleGroup;
          this._isSingleSelector = group && !group.multiple;
          this._type = this._isSingleSelector ? 'radio' : 'checkbox';
          this.id = this.id || "mat-button-toggle-".concat(_uniqueIdCounter++);

          if (this._isSingleSelector) {
            this.name = group.name;
          }

          if (group) {
            if (group._isPrechecked(this)) {
              this.checked = true;
            } else if (group._isSelected(this) !== this._checked) {
              // As as side effect of the circular dependency between the toggle group and the button,
              // we may end up in a state where the button is supposed to be checked on init, but it
              // isn't, because the checked value was assigned too early. This can happen when Ivy
              // assigns the static input value before the `ngOnInit` has run.
              group._syncButtonToggle(this, this._checked);
            }
          }

          this._focusMonitor.monitor(this._elementRef, true);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          /** @type {?} */
          var group = this.buttonToggleGroup;

          this._focusMonitor.stopMonitoring(this._elementRef); // Remove the toggle from the selection once it's destroyed. Needs to happen
          // on the next tick in order to avoid "changed after checked" errors.


          if (group && group._isSelected(this)) {
            group._syncButtonToggle(this, false, false, true);
          }
        }
        /**
         * Focuses the button.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus(options) {
          this._buttonElement.nativeElement.focus(options);
        }
        /**
         * Checks the button toggle due to an interaction with the underlying native button.
         * @return {?}
         */

      }, {
        key: "_onButtonClick",
        value: function _onButtonClick() {
          /** @type {?} */
          var newChecked = this._isSingleSelector ? true : !this._checked;

          if (newChecked !== this._checked) {
            this._checked = newChecked;

            if (this.buttonToggleGroup) {
              this.buttonToggleGroup._syncButtonToggle(this, this._checked, true);

              this.buttonToggleGroup._onTouched();
            }
          } // Emit a change event when it's the single selector


          this.change.emit(new MatButtonToggleChange(this, this.value));
        }
        /**
         * Marks the button toggle as needing checking for change detection.
         * This method is exposed because the parent button toggle group will directly
         * update bound properties of the radio button.
         * @return {?}
         */

      }, {
        key: "_markForCheck",
        value: function _markForCheck() {
          // When the group value changes, the button will not be notified.
          // Use `markForCheck` to explicit update button toggle's status.
          this._changeDetectorRef.markForCheck();
        }
      }, {
        key: "buttonId",
        get: function get() {
          return "".concat(this.id, "-button");
        }
        /**
         * The appearance style of the button.
         * @return {?}
         */

      }, {
        key: "appearance",
        get: function get() {
          return this.buttonToggleGroup ? this.buttonToggleGroup.appearance : this._appearance;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._appearance = value;
        }
        /**
         * Whether the button is checked.
         * @return {?}
         */

      }, {
        key: "checked",
        get: function get() {
          return this.buttonToggleGroup ? this.buttonToggleGroup._isSelected(this) : this._checked;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);

          if (newValue !== this._checked) {
            this._checked = newValue;

            if (this.buttonToggleGroup) {
              this.buttonToggleGroup._syncButtonToggle(this, this._checked);
            }

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * Whether the button is disabled.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this._disabled || this.buttonToggleGroup && this.buttonToggleGroup.disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
      }]);

      return MatButtonToggle;
    }(_MatButtonToggleMixinBase);

    MatButtonToggle.ɵfac = function MatButtonToggle_Factory(t) {
      return new (t || MatButtonToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatButtonToggleGroup, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, 8));
    };

    MatButtonToggle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: MatButtonToggle,
      selectors: [["mat-button-toggle"]],
      viewQuery: function MatButtonToggle_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._buttonElement = _t.first);
        }
      },
      hostAttrs: [1, "mat-button-toggle"],
      hostVars: 11,
      hostBindings: function MatButtonToggle_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focus", function MatButtonToggle_focus_HostBindingHandler() {
            return ctx.focus();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("tabindex", 0 - 1)("id", ctx.id)("name", null);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-button-toggle-standalone", !ctx.buttonToggleGroup)("mat-button-toggle-checked", ctx.checked)("mat-button-toggle-disabled", ctx.disabled)("mat-button-toggle-appearance-standard", ctx.appearance === "standard");
        }
      },
      inputs: {
        disableRipple: "disableRipple",
        ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
        tabIndex: "tabIndex",
        appearance: "appearance",
        checked: "checked",
        disabled: "disabled",
        id: "id",
        name: "name",
        ariaLabel: ["aria-label", "ariaLabel"],
        value: "value"
      },
      outputs: {
        change: "change"
      },
      exportAs: ["matButtonToggle"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c1,
      decls: 6,
      vars: 9,
      consts: [["type", "button", 1, "mat-button-toggle-button", "mat-focus-indicator", 3, "id", "disabled", "click"], ["button", ""], [1, "mat-button-toggle-label-content"], [1, "mat-button-toggle-focus-overlay"], ["matRipple", "", 1, "mat-button-toggle-ripple", 3, "matRippleTrigger", "matRippleDisabled"]],
      template: function MatButtonToggle_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatButtonToggle_Template_button_click_0_listener() {
            return ctx._onButtonClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 4);
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx.buttonId)("disabled", ctx.disabled || null);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("tabindex", ctx.disabled ? 0 - 1 : ctx.tabIndex)("aria-pressed", ctx.checked)("name", ctx.name || null)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx.disableRipple || ctx.disabled);
        }
      },
      directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"]],
      styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:transparent}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:4px}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}.cdk-high-contrast-active .mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:.5}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}.cdk-high-contrast-active .mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.5}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:48px;padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 48px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatButtonToggle.ctorParameters = function () {
      return [{
        type: MatButtonToggleGroup,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
        }]
      }];
    };

    MatButtonToggle.propDecorators = {
      ariaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['aria-label']
      }],
      ariaLabelledby: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['aria-labelledby']
      }],
      _buttonElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: ['button']
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      tabIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      appearance: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      checked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      change: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatButtonToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'mat-button-toggle',
          template: "<button #button class=\"mat-button-toggle-button mat-focus-indicator\"\n        type=\"button\"\n        [id]=\"buttonId\"\n        [attr.tabindex]=\"disabled ? -1 : tabIndex\"\n        [attr.aria-pressed]=\"checked\"\n        [disabled]=\"disabled || null\"\n        [attr.name]=\"name || null\"\n        [attr.aria-label]=\"ariaLabel\"\n        [attr.aria-labelledby]=\"ariaLabelledby\"\n        (click)=\"_onButtonClick()\">\n  <div class=\"mat-button-toggle-label-content\">\n    <ng-content></ng-content>\n  </div>\n</button>\n\n<div class=\"mat-button-toggle-focus-overlay\"></div>\n<div class=\"mat-button-toggle-ripple\" matRipple\n     [matRippleTrigger]=\"button\"\n     [matRippleDisabled]=\"this.disableRipple || this.disabled\">\n</div>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          exportAs: 'matButtonToggle',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          inputs: ['disableRipple'],
          host: {
            '[class.mat-button-toggle-standalone]': '!buttonToggleGroup',
            '[class.mat-button-toggle-checked]': 'checked',
            '[class.mat-button-toggle-disabled]': 'disabled',
            '[class.mat-button-toggle-appearance-standard]': 'appearance === "standard"',
            'class': 'mat-button-toggle',
            // Always reset the tabindex to -1 so it doesn't conflict with the one on the `button`,
            // but can still receive focus from things like cdkFocusInitial.
            '[attr.tabindex]': '-1',
            '[attr.id]': 'id',
            '[attr.name]': 'null',
            '(focus)': 'focus()'
          },
          styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:transparent}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:4px}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}.cdk-high-contrast-active .mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:.5}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}.cdk-high-contrast-active .mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.5}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:48px;padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 48px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}\n"]
        }]
      }], function () {
        return [{
          type: MatButtonToggleGroup,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
          }]
        }];
      }, {
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['aria-labelledby']
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        appearance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        checked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['aria-label']
        }],
        _buttonElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['button']
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/button-toggle/button-toggle-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatButtonToggleModule = function MatButtonToggleModule() {
      _classCallCheck(this, MatButtonToggleModule);
    };

    MatButtonToggleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: MatButtonToggleModule
    });
    MatButtonToggleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function MatButtonToggleModule_Factory(t) {
        return new (t || MatButtonToggleModule)();
      },
      imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatButtonToggleModule, {
        declarations: function declarations() {
          return [MatButtonToggleGroup, MatButtonToggle];
        },
        imports: function imports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]];
        },
        exports: function exports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatButtonToggleGroup, MatButtonToggle];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatButtonToggleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]],
          exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatButtonToggleGroup, MatButtonToggle],
          declarations: [MatButtonToggleGroup, MatButtonToggle]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/button-toggle/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=button-toggle.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js ***!
    \**********************************************************************/

  /*! exports provided: MAT_TABS_CONFIG, MAT_TAB_GROUP, MatInkBar, MatTab, MatTabBody, MatTabBodyPortal, MatTabChangeEvent, MatTabContent, MatTabGroup, MatTabHeader, MatTabLabel, MatTabLabelWrapper, MatTabLink, MatTabNav, MatTabsModule, _MAT_INK_BAR_POSITIONER, _MatTabBodyBase, _MatTabGroupBase, _MatTabHeaderBase, _MatTabLinkBase, _MatTabNavBase, matTabsAnimations, ɵangular_material_src_material_tabs_tabs_a, ɵangular_material_src_material_tabs_tabs_b */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015TabsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_TABS_CONFIG", function () {
      return MAT_TABS_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_TAB_GROUP", function () {
      return MAT_TAB_GROUP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatInkBar", function () {
      return MatInkBar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTab", function () {
      return MatTab;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabBody", function () {
      return MatTabBody;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabBodyPortal", function () {
      return MatTabBodyPortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabChangeEvent", function () {
      return MatTabChangeEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabContent", function () {
      return MatTabContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabGroup", function () {
      return MatTabGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabHeader", function () {
      return MatTabHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabLabel", function () {
      return MatTabLabel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabLabelWrapper", function () {
      return MatTabLabelWrapper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabLink", function () {
      return MatTabLink;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabNav", function () {
      return MatTabNav;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTabsModule", function () {
      return MatTabsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MAT_INK_BAR_POSITIONER", function () {
      return _MAT_INK_BAR_POSITIONER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatTabBodyBase", function () {
      return _MatTabBodyBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatTabGroupBase", function () {
      return _MatTabGroupBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatTabHeaderBase", function () {
      return _MatTabHeaderBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatTabLinkBase", function () {
      return _MatTabLinkBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_MatTabNavBase", function () {
      return _MatTabNavBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matTabsAnimations", function () {
      return matTabsAnimations;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_a", function () {
      return _MAT_INK_BAR_POSITIONER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_tabs_tabs_b", function () {
      return MatPaginatedTabHeader;
    });
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/ink-bar.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Interface for a a MatInkBar positioner method, defining the positioning and width of the ink
     * bar in a set of tabs.
     * @record
     */


    function MatTab_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
      }
    }

    var _c0 = ["*"];

    function MatTabBody_ng_template_2_Template(rf, ctx) {}

    var _c1 = function _c1(a0) {
      return {
        animationDuration: a0
      };
    };

    var _c2 = function _c2(a0, a1) {
      return {
        value: a0,
        params: a1
      };
    };

    var _c3 = ["tabBodyWrapper"];
    var _c4 = ["tabHeader"];

    function MatTabGroup_div_2_ng_template_2_ng_template_0_Template(rf, ctx) {}

    function MatTabGroup_div_2_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MatTabGroup_div_2_ng_template_2_ng_template_0_Template, 0, 0, "ng-template", 9);
      }

      if (rf & 2) {
        var tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkPortalOutlet", tab_r4.templateLabel);
      }
    }

    function MatTabGroup_div_2_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](tab_r4.textLabel);
      }
    }

    function MatTabGroup_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatTabGroup_div_2_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

          var tab_r4 = ctx.$implicit;
          var i_r5 = ctx.index;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);

          return ctx_r11._handleClick(tab_r4, _r0, i_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatTabGroup_div_2_ng_template_2_Template, 1, 1, "ng-template", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MatTabGroup_div_2_ng_template_3_Template, 1, 1, "ng-template", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tab_r4 = ctx.$implicit;
        var i_r5 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-label-active", ctx_r1.selectedIndex == i_r5);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx_r1._getTabLabelId(i_r5))("disabled", tab_r4.disabled)("matRippleDisabled", tab_r4.disabled || ctx_r1.disableRipple);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("tabIndex", ctx_r1._getTabIndex(tab_r4, i_r5))("aria-posinset", i_r5 + 1)("aria-setsize", ctx_r1._tabs.length)("aria-controls", ctx_r1._getTabContentId(i_r5))("aria-selected", ctx_r1.selectedIndex == i_r5)("aria-label", tab_r4.ariaLabel || null)("aria-labelledby", !tab_r4.ariaLabel && tab_r4.ariaLabelledby ? tab_r4.ariaLabelledby : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tab_r4.templateLabel);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !tab_r4.templateLabel);
      }
    }

    function MatTabGroup_mat_tab_body_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-tab-body", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("_onCentered", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentered_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          return ctx_r15._removeTabBodyWrapperHeight();
        })("_onCentering", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentering_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          return ctx_r17._setTabBodyWrapperHeight($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tab_r13 = ctx.$implicit;
        var i_r14 = ctx.index;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-body-active", ctx_r3.selectedIndex == i_r14);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx_r3._getTabContentId(i_r14))("content", tab_r13.content)("position", tab_r13.position)("origin", tab_r13.origin)("animationDuration", ctx_r3.animationDuration);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-labelledby", ctx_r3._getTabLabelId(i_r14));
      }
    }

    var _c5 = ["tabListContainer"];
    var _c6 = ["tabList"];
    var _c7 = ["nextPaginator"];
    var _c8 = ["previousPaginator"];
    var _c9 = ["mat-tab-nav-bar", ""];

    function _MatInkBarPositioner() {}
    /**
     * Injection token for the MatInkBar's Positioner.
     * @type {?}
     */


    var _MAT_INK_BAR_POSITIONER = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MatInkBarPositioner', {
      providedIn: 'root',
      factory: _MAT_INK_BAR_POSITIONER_FACTORY
    });
    /**
     * The default positioner function for the MatInkBar.
     * \@docs-private
     * @return {?}
     */


    function _MAT_INK_BAR_POSITIONER_FACTORY() {
      /** @type {?} */
      var method =
      /**
      * @param {?} element
      * @return {?}
      */
      function method(element) {
        return {
          left: element ? (element.offsetLeft || 0) + 'px' : '0',
          width: element ? (element.offsetWidth || 0) + 'px' : '0'
        };
      };

      return method;
    }
    /**
     * The ink-bar is used to display and animate the line underneath the current active tab label.
     * \@docs-private
     */


    var MatInkBar = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _ngZone
       * @param {?} _inkBarPositioner
       * @param {?=} _animationMode
       */
      function MatInkBar(_elementRef, _ngZone, _inkBarPositioner, _animationMode) {
        _classCallCheck(this, MatInkBar);

        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._inkBarPositioner = _inkBarPositioner;
        this._animationMode = _animationMode;
      }
      /**
       * Calculates the styles from the provided element in order to align the ink-bar to that element.
       * Shows the ink bar if previously set as hidden.
       * @param {?} element
       * @return {?}
       */


      _createClass(MatInkBar, [{
        key: "alignToElement",
        value: function alignToElement(element) {
          var _this5 = this;

          this.show();

          if (typeof requestAnimationFrame !== 'undefined') {
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              requestAnimationFrame(
              /**
              * @return {?}
              */
              function () {
                return _this5._setStyles(element);
              });
            });
          } else {
            this._setStyles(element);
          }
        }
        /**
         * Shows the ink bar.
         * @return {?}
         */

      }, {
        key: "show",
        value: function show() {
          this._elementRef.nativeElement.style.visibility = 'visible';
        }
        /**
         * Hides the ink bar.
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          this._elementRef.nativeElement.style.visibility = 'hidden';
        }
        /**
         * Sets the proper styles to the ink bar element.
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_setStyles",
        value: function _setStyles(element) {
          /** @type {?} */
          var positions = this._inkBarPositioner(element);
          /** @type {?} */


          var inkBar = this._elementRef.nativeElement;
          inkBar.style.left = positions.left;
          inkBar.style.width = positions.width;
        }
      }]);

      return MatInkBar;
    }();

    MatInkBar.ɵfac = function MatInkBar_Factory(t) {
      return new (t || MatInkBar)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_MAT_INK_BAR_POSITIONER), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatInkBar.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: MatInkBar,
      selectors: [["mat-ink-bar"]],
      hostAttrs: [1, "mat-ink-bar"],
      hostVars: 2,
      hostBindings: function MatInkBar_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        }
      }
    });
    /** @nocollapse */

    MatInkBar.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_MAT_INK_BAR_POSITIONER]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatInkBar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
          selector: 'mat-ink-bar',
          host: {
            'class': 'mat-ink-bar',
            '[class._mat-animation-noopable]': "_animationMode === 'NoopAnimations'"
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_MAT_INK_BAR_POSITIONER]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab-content.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Decorates the `ng-template` tags and reads out the template from it.
     */


    var MatTabContent =
    /**
     * @param {?} template
     */
    function MatTabContent(template) {
      _classCallCheck(this, MatTabContent);

      this.template = template;
    };

    MatTabContent.ɵfac = function MatTabContent_Factory(t) {
      return new (t || MatTabContent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]));
    };

    MatTabContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: MatTabContent,
      selectors: [["", "matTabContent", ""]]
    });
    /** @nocollapse */

    MatTabContent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
          selector: '[matTabContent]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab-label.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Used to flag tab labels for use with the portal directive
     */


    var MatTabLabel = /*#__PURE__*/function (_angular_cdk_portal__) {
      _inherits(MatTabLabel, _angular_cdk_portal__);

      var _super2 = _createSuper(MatTabLabel);

      function MatTabLabel() {
        _classCallCheck(this, MatTabLabel);

        return _super2.apply(this, arguments);
      }

      return MatTabLabel;
    }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortal"]);

    MatTabLabel.ɵfac = function MatTabLabel_Factory(t) {
      return ɵMatTabLabel_BaseFactory(t || MatTabLabel);
    };

    MatTabLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: MatTabLabel,
      selectors: [["", "mat-tab-label", ""], ["", "matTabLabel", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵMatTabLabel_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](MatTabLabel);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabLabel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
          selector: '[mat-tab-label], [matTabLabel]'
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatTab.

    /**
     * \@docs-private
     */


    var MatTabBase = function MatTabBase() {
      _classCallCheck(this, MatTabBase);
    };
    /** @type {?} */


    var _MatTabMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(MatTabBase);
    /**
     * Used to provide a tab group to a tab without causing a circular dependency.
     * \@docs-private
     * @type {?}
     */


    var MAT_TAB_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MAT_TAB_GROUP');

    var MatTab = /*#__PURE__*/function (_MatTabMixinBase2) {
      _inherits(MatTab, _MatTabMixinBase2);

      var _super3 = _createSuper(MatTab);

      /**
       * @param {?} _viewContainerRef
       * @param {?=} _closestTabGroup
       */
      function MatTab(_viewContainerRef, _closestTabGroup) {
        var _this6;

        _classCallCheck(this, MatTab);

        _this6 = _super3.call(this);
        _this6._viewContainerRef = _viewContainerRef;
        _this6._closestTabGroup = _closestTabGroup;
        /**
         * Plain text label for the tab, used when there is no template label.
         */

        _this6.textLabel = '';
        /**
         * Portal that will be the hosted content of the tab
         */

        _this6._contentPortal = null;
        /**
         * Emits whenever the internal state of the tab changes.
         */

        _this6._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * The relatively indexed position where 0 represents the center, negative is left, and positive
         * represents the right.
         */

        _this6.position = null;
        /**
         * The initial relatively index origin of the tab if it was created and selected after there
         * was already a selected tab. Provides context of what position the tab should originate from.
         */

        _this6.origin = null;
        /**
         * Whether the tab is currently active.
         */

        _this6.isActive = false;
        return _this6;
      }
      /**
       * Content for the tab label given by `<ng-template mat-tab-label>`.
       * @return {?}
       */


      _createClass(MatTab, [{
        key: "ngOnChanges",

        /**
         * @param {?} changes
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if (changes.hasOwnProperty('textLabel') || changes.hasOwnProperty('disabled')) {
            this._stateChanges.next();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._stateChanges.complete();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this._contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["TemplatePortal"](this._explicitContent || this._implicitContent, this._viewContainerRef);
        }
      }, {
        key: "templateLabel",
        get: function get() {
          return this._templateLabel;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          // Only update the templateLabel via query if there is actually
          // a MatTabLabel found. This works around an issue where a user may have
          // manually set `templateLabel` during creation mode, which would then get clobbered
          // by `undefined` when this query resolves.
          if (value) {
            this._templateLabel = value;
          }
        }
        /**
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "content",
        get: function get() {
          return this._contentPortal;
        }
      }]);

      return MatTab;
    }(_MatTabMixinBase);

    MatTab.ɵfac = function MatTab_Factory(t) {
      return new (t || MatTab)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_TAB_GROUP, 8));
    };

    MatTab.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: MatTab,
      selectors: [["mat-tab"]],
      contentQueries: function MatTab_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatTabLabel, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticContentQuery"](dirIndex, MatTabContent, true, _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.templateLabel = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._explicitContent = _t.first);
        }
      },
      viewQuery: function MatTab_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._implicitContent = _t.first);
        }
      },
      inputs: {
        disabled: "disabled",
        textLabel: ["label", "textLabel"],
        ariaLabel: ["aria-label", "ariaLabel"],
        ariaLabelledby: ["aria-labelledby", "ariaLabelledby"]
      },
      exportAs: ["matTab"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function MatTab_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MatTab_ng_template_0_Template, 1, 0, "ng-template");
        }
      },
      encapsulation: 2
    });
    /** @nocollapse */

    MatTab.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [MAT_TAB_GROUP]
        }]
      }];
    };

    MatTab.propDecorators = {
      templateLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
        args: [MatTabLabel]
      }],
      _explicitContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
        args: [MatTabContent, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"],
          "static": true
        }]
      }],
      _implicitContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], {
          "static": true
        }]
      }],
      textLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['label']
      }],
      ariaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['aria-label']
      }],
      ariaLabelledby: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['aria-labelledby']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTab, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: 'mat-tab',
          template: "<!-- Create a template for the content of the <mat-tab> so that we can grab a reference to this\n    TemplateRef and use it in a Portal to render the tab content in the appropriate place in the\n    tab-group. -->\n<ng-template><ng-content></ng-content></ng-template>\n",
          inputs: ['disabled'],
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
          exportAs: 'matTab'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_TAB_GROUP]
          }]
        }];
      }, {
        textLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['label']
        }],
        templateLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
          args: [MatTabLabel]
        }],
        _explicitContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
          args: [MatTabContent, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"],
            "static": true
          }]
        }],
        _implicitContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], {
            "static": true
          }]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['aria-labelledby']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tabs-animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by the Material tabs.
     * \@docs-private
     * @type {?}
     */


    var matTabsAnimations = {
      /**
       * Animation translates a tab along the X axis.
       */
      translateTab: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('translateTab', [// Note: transitions to `none` instead of 0, because some browsers might blur the content.
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('center, void, left-origin-center, right-origin-center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'none'
      })), // If the tab is either on the left or right, we additionally add a `min-height` of 1px
      // in order to ensure that the element has a height before its state changes. This is
      // necessary because Chrome does seem to skip the transition in RTL mode if the element does
      // not have a static height and is not rendered. See related issue: #9465
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'translate3d(-100%, 0, 0)',
        minHeight: '1px'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('right', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'translate3d(100%, 0, 0)',
        minHeight: '1px'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('* => left, * => right, left => center, right => center', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('void => left-origin-center', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'translate3d(-100%, 0, 0)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('void => right-origin-center', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        transform: 'translate3d(100%, 0, 0)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')])])
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab-body.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The portal host directive for the contents of the tab.
     * \@docs-private
     */

    var MatTabBodyPortal = /*#__PURE__*/function (_angular_cdk_portal__2) {
      _inherits(MatTabBodyPortal, _angular_cdk_portal__2);

      var _super4 = _createSuper(MatTabBodyPortal);

      /**
       * @param {?} componentFactoryResolver
       * @param {?} viewContainerRef
       * @param {?} _host
       * @param {?=} _document
       */
      function MatTabBodyPortal(componentFactoryResolver, viewContainerRef, _host,
      /**
       * @deprecated `_document` parameter to be made required.
       * @breaking-change 9.0.0
       */
      _document) {
        var _this7;

        _classCallCheck(this, MatTabBodyPortal);

        _this7 = _super4.call(this, componentFactoryResolver, viewContainerRef, _document);
        _this7._host = _host;
        /**
         * Subscription to events for when the tab body begins centering.
         */

        _this7._centeringSub = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        /**
         * Subscription to events for when the tab body finishes leaving from center position.
         */

        _this7._leavingSub = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        return _this7;
      }
      /**
       * Set initial visibility or set up subscription for changing visibility.
       * @return {?}
       */


      _createClass(MatTabBodyPortal, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          _get(_getPrototypeOf(MatTabBodyPortal.prototype), "ngOnInit", this).call(this);

          this._centeringSub = this._host._beforeCentering.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(this._host._isCenterPosition(this._host._position))).subscribe(
          /**
          * @param {?} isCentering
          * @return {?}
          */
          function (isCentering) {
            if (isCentering && !_this8.hasAttached()) {
              _this8.attach(_this8._host._content);
            }
          });
          this._leavingSub = this._host._afterLeavingCenter.subscribe(
          /**
          * @return {?}
          */
          function () {
            _this8.detach();
          });
        }
        /**
         * Clean up centering subscription.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(MatTabBodyPortal.prototype), "ngOnDestroy", this).call(this);

          this._centeringSub.unsubscribe();

          this._leavingSub.unsubscribe();
        }
      }]);

      return MatTabBodyPortal;
    }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"]);

    MatTabBodyPortal.ɵfac = function MatTabBodyPortal_Factory(t) {
      return new (t || MatTabBodyPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatTabBody;
      })), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
    };

    MatTabBodyPortal.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: MatTabBodyPortal,
      selectors: [["", "matTabBodyHost", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    MatTabBodyPortal.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
      }, {
        type: MatTabBody,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return MatTabBody;
          })]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabBodyPortal, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
          selector: '[matTabBodyHost]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
        }, {
          type: MatTabBody,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return MatTabBody;
            })]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Base class with all of the `MatTabBody` functionality.
     * \@docs-private
     * @abstract
     */
    // tslint:disable-next-line:class-name


    var _MatTabBodyBase = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _dir
       * @param {?} changeDetectorRef
       */
      function _MatTabBodyBase(_elementRef, _dir, changeDetectorRef) {
        var _this9 = this;

        _classCallCheck(this, _MatTabBodyBase);

        this._elementRef = _elementRef;
        this._dir = _dir;
        /**
         * Subscription to the directionality change observable.
         */

        this._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        /**
         * Emits when an animation on the tab is complete.
         */

        this._translateTabComplete = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Event emitted when the tab begins to animate towards the center as the active tab.
         */

        this._onCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event emitted before the centering of the tab begins.
         */

        this._beforeCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event emitted before the centering of the tab begins.
         */

        this._afterLeavingCenter = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event emitted when the tab completes its animation towards the center.
         */

        this._onCentered = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](true); // Note that the default value will always be overwritten by `MatTabBody`, but we need one
        // anyway to prevent the animations module from throwing an error if the body is used on its own.

        /**
         * Duration for the tab's animation.
         */

        this.animationDuration = '500ms';

        if (_dir) {
          this._dirChangeSubscription = _dir.change.subscribe(
          /**
          * @param {?} dir
          * @return {?}
          */
          function (dir) {
            _this9._computePositionAnimationState(dir);

            changeDetectorRef.markForCheck();
          });
        } // Ensure that we get unique animation events, because the `.done` callback can get
        // invoked twice in some browsers. See https://github.com/angular/angular/issues/24084.


        this._translateTabComplete.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])(
        /**
        * @param {?} x
        * @param {?} y
        * @return {?}
        */
        function (x, y) {
          return x.fromState === y.fromState && x.toState === y.toState;
        })).subscribe(
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          // If the transition to the center is complete, emit an event.
          if (_this9._isCenterPosition(event.toState) && _this9._isCenterPosition(_this9._position)) {
            _this9._onCentered.emit();
          }

          if (_this9._isCenterPosition(event.fromState) && !_this9._isCenterPosition(_this9._position)) {
            _this9._afterLeavingCenter.emit();
          }
        });
      }
      /**
       * The shifted index position of the tab body, where zero represents the active center tab.
       * @param {?} position
       * @return {?}
       */


      _createClass(_MatTabBodyBase, [{
        key: "ngOnInit",

        /**
         * After initialized, check if the content is centered and has an origin. If so, set the
         * special position states that transition the tab from the left or right before centering.
         * @return {?}
         */
        value: function ngOnInit() {
          if (this._position == 'center' && this.origin != null) {
            this._position = this._computePositionFromOrigin(this.origin);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._dirChangeSubscription.unsubscribe();

          this._translateTabComplete.complete();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onTranslateTabStarted",
        value: function _onTranslateTabStarted(event) {
          /** @type {?} */
          var isCentering = this._isCenterPosition(event.toState);

          this._beforeCentering.emit(isCentering);

          if (isCentering) {
            this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
          }
        }
        /**
         * The text direction of the containing app.
         * @return {?}
         */

      }, {
        key: "_getLayoutDirection",
        value: function _getLayoutDirection() {
          return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
        }
        /**
         * Whether the provided position state is considered center, regardless of origin.
         * @param {?} position
         * @return {?}
         */

      }, {
        key: "_isCenterPosition",
        value: function _isCenterPosition(position) {
          return position == 'center' || position == 'left-origin-center' || position == 'right-origin-center';
        }
        /**
         * Computes the position state that will be used for the tab-body animation trigger.
         * @private
         * @param {?=} dir
         * @return {?}
         */

      }, {
        key: "_computePositionAnimationState",
        value: function _computePositionAnimationState() {
          var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._getLayoutDirection();

          if (this._positionIndex < 0) {
            this._position = dir == 'ltr' ? 'left' : 'right';
          } else if (this._positionIndex > 0) {
            this._position = dir == 'ltr' ? 'right' : 'left';
          } else {
            this._position = 'center';
          }
        }
        /**
         * Computes the position state based on the specified origin position. This is used if the
         * tab is becoming visible immediately after creation.
         * @private
         * @param {?} origin
         * @return {?}
         */

      }, {
        key: "_computePositionFromOrigin",
        value: function _computePositionFromOrigin(origin) {
          /** @type {?} */
          var dir = this._getLayoutDirection();

          if (dir == 'ltr' && origin <= 0 || dir == 'rtl' && origin > 0) {
            return 'left-origin-center';
          }

          return 'right-origin-center';
        }
      }, {
        key: "position",
        set: function set(position) {
          this._positionIndex = position;

          this._computePositionAnimationState();
        }
      }]);

      return _MatTabBodyBase;
    }();

    _MatTabBodyBase.ɵfac = function _MatTabBodyBase_Factory(t) {
      return new (t || _MatTabBodyBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
    };

    _MatTabBodyBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: _MatTabBodyBase,
      inputs: {
        animationDuration: "animationDuration",
        position: "position",
        _content: ["content", "_content"],
        origin: "origin"
      },
      outputs: {
        _onCentering: "_onCentering",
        _beforeCentering: "_beforeCentering",
        _afterLeavingCenter: "_afterLeavingCenter",
        _onCentered: "_onCentered"
      }
    });
    /** @nocollapse */

    _MatTabBodyBase.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }];
    };

    _MatTabBodyBase.propDecorators = {
      _onCentering: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      _beforeCentering: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      _afterLeavingCenter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      _onCentered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      _content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['content']
      }],
      origin: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      animationDuration: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabBodyBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      }, {
        _onCentering: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _beforeCentering: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _afterLeavingCenter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        _onCentered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        animationDuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        _content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['content']
        }],
        origin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * Wrapper for the contents of a tab.
     * \@docs-private
     */


    var MatTabBody = /*#__PURE__*/function (_MatTabBodyBase2) {
      _inherits(MatTabBody, _MatTabBodyBase2);

      var _super5 = _createSuper(MatTabBody);

      /**
       * @param {?} elementRef
       * @param {?} dir
       * @param {?} changeDetectorRef
       */
      function MatTabBody(elementRef, dir, changeDetectorRef) {
        _classCallCheck(this, MatTabBody);

        return _super5.call(this, elementRef, dir, changeDetectorRef);
      }

      return MatTabBody;
    }(_MatTabBodyBase);

    MatTabBody.ɵfac = function MatTabBody_Factory(t) {
      return new (t || MatTabBody)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
    };

    MatTabBody.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: MatTabBody,
      selectors: [["mat-tab-body"]],
      viewQuery: function MatTabBody_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalHostDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._portalHost = _t.first);
        }
      },
      hostAttrs: [1, "mat-tab-body"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 6,
      consts: [[1, "mat-tab-body-content"], ["content", ""], ["matTabBodyHost", ""]],
      template: function MatTabBody_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("@translateTab.start", function MatTabBody_Template_div_animation_translateTab_start_0_listener($event) {
            return ctx._onTranslateTabStarted($event);
          })("@translateTab.done", function MatTabBody_Template_div_animation_translateTab_done_0_listener($event) {
            return ctx._translateTabComplete.next($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatTabBody_ng_template_2_Template, 0, 0, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@translateTab", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](3, _c2, ctx._position, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c1, ctx.animationDuration)));
        }
      },
      directives: [MatTabBodyPortal],
      styles: [".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"],
      encapsulation: 2,
      data: {
        animation: [matTabsAnimations.translateTab]
      }
    });
    /** @nocollapse */

    MatTabBody.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }];
    };

    MatTabBody.propDecorators = {
      _portalHost: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalHostDirective"]]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabBody, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: 'mat-tab-body',
          template: "<div class=\"mat-tab-body-content\" #content\n     [@translateTab]=\"{\n        value: _position,\n        params: {animationDuration: animationDuration}\n     }\"\n     (@translateTab.start)=\"_onTranslateTabStarted($event)\"\n     (@translateTab.done)=\"_translateTabComplete.next($event)\">\n  <ng-template matTabBodyHost></ng-template>\n</div>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
          animations: [matTabsAnimations.translateTab],
          host: {
            'class': 'mat-tab-body'
          },
          styles: [".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      }, {
        _portalHost: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalHostDirective"]]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab-config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Object that can be used to configure the default options for the tabs module.
     * @record
     */


    function MatTabsConfig() {}

    if (false) {}
    /**
     * Injection token that can be used to provide the default options the tabs module.
     * @type {?}
     */


    var MAT_TABS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MAT_TABS_CONFIG');
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab-group.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Used to generate unique ID's for each tab component
     * @type {?}
     */

    var nextId = 0;
    /**
     * A simple change event emitted on focus or selection changes.
     */

    var MatTabChangeEvent = function MatTabChangeEvent() {
      _classCallCheck(this, MatTabChangeEvent);
    };

    if (false) {} // Boilerplate for applying mixins to MatTabGroup.

    /**
     * \@docs-private
     */


    var MatTabGroupMixinBase =
    /**
     * @param {?} _elementRef
     */
    function MatTabGroupMixinBase(_elementRef) {
      _classCallCheck(this, MatTabGroupMixinBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatTabGroupMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisableRipple"])(MatTabGroupMixinBase), 'primary');
    /**
     * @record
     */


    function MatTabGroupBaseHeader() {}

    if (false) {}
    /**
     * Base class with all of the `MatTabGroupBase` functionality.
     * \@docs-private
     * @abstract
     */
    // tslint:disable-next-line:class-name


    var _MatTabGroupBase = /*#__PURE__*/function (_MatTabGroupMixinBase2) {
      _inherits(_MatTabGroupBase, _MatTabGroupMixinBase2);

      var _super6 = _createSuper(_MatTabGroupBase);

      /**
       * @param {?} elementRef
       * @param {?} _changeDetectorRef
       * @param {?=} defaultConfig
       * @param {?=} _animationMode
       */
      function _MatTabGroupBase(elementRef, _changeDetectorRef, defaultConfig, _animationMode) {
        var _this10;

        _classCallCheck(this, _MatTabGroupBase);

        _this10 = _super6.call(this, elementRef);
        _this10._changeDetectorRef = _changeDetectorRef;
        _this10._animationMode = _animationMode;
        /**
         * All of the tabs that belong to the group.
         */

        _this10._tabs = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["QueryList"]();
        /**
         * The tab index that should be selected after the content has been checked.
         */

        _this10._indexToSelect = 0;
        /**
         * Snapshot of the height of the tab body wrapper before another tab is activated.
         */

        _this10._tabBodyWrapperHeight = 0;
        /**
         * Subscription to tabs being added/removed.
         */

        _this10._tabsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        /**
         * Subscription to changes in the tab labels.
         */

        _this10._tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        _this10._dynamicHeight = false;
        _this10._selectedIndex = null;
        /**
         * Position of the tab header.
         */

        _this10.headerPosition = 'above';
        /**
         * Output to enable support for two-way binding on `[(selectedIndex)]`
         */

        _this10.selectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event emitted when focus has changed within a tab group.
         */

        _this10.focusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event emitted when the body animation has completed
         */

        _this10.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event emitted when the tab selection has changed.
         */

        _this10.selectedTabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](true);
        _this10._groupId = nextId++;
        _this10.animationDuration = defaultConfig && defaultConfig.animationDuration ? defaultConfig.animationDuration : '500ms';
        _this10.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
        return _this10;
      }
      /**
       * Whether the tab group should grow to the size of the active tab.
       * @return {?}
       */


      _createClass(_MatTabGroupBase, [{
        key: "ngAfterContentChecked",

        /**
         * After the content is checked, this component knows what tabs have been defined
         * and what the selected index should be. This is where we can know exactly what position
         * each tab should be in according to the new selected index, and additionally we know how
         * a new selected tab should transition in (from the left or right).
         * @return {?}
         */
        value: function ngAfterContentChecked() {
          var _this11 = this;

          // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
          // the amount of tabs changes before the actual change detection runs.

          /** @type {?} */
          var indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect); // If there is a change in selected index, emit a change event. Should not trigger if
          // the selected index has not yet been initialized.


          if (this._selectedIndex != indexToSelect) {
            /** @type {?} */
            var isFirstRun = this._selectedIndex == null;

            if (!isFirstRun) {
              this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
            } // Changing these values after change detection has run
            // since the checked content may contain references to them.


            Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              _this11._tabs.forEach(
              /**
              * @param {?} tab
              * @param {?} index
              * @return {?}
              */
              function (tab, index) {
                return tab.isActive = index === indexToSelect;
              });

              if (!isFirstRun) {
                _this11.selectedIndexChange.emit(indexToSelect);
              }
            });
          } // Setup the position for each tab and optionally setup an origin on the next selected tab.


          this._tabs.forEach(
          /**
          * @param {?} tab
          * @param {?} index
          * @return {?}
          */
          function (tab, index) {
            tab.position = index - indexToSelect; // If there is already a selected tab, then set up an origin for the next selected tab
            // if it doesn't have one already.

            if (_this11._selectedIndex != null && tab.position == 0 && !tab.origin) {
              tab.origin = indexToSelect - _this11._selectedIndex;
            }
          });

          if (this._selectedIndex !== indexToSelect) {
            this._selectedIndex = indexToSelect;

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this12 = this;

          this._subscribeToAllTabChanges();

          this._subscribeToTabLabels(); // Subscribe to changes in the amount of tabs, in order to be
          // able to re-render the content as new tabs are added or removed.


          this._tabsSubscription = this._tabs.changes.subscribe(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var indexToSelect = _this12._clampTabIndex(_this12._indexToSelect); // Maintain the previously-selected tab if a new tab is added or removed and there is no
            // explicit change that selects a different tab.


            if (indexToSelect === _this12._selectedIndex) {
              /** @type {?} */
              var tabs = _this12._tabs.toArray();

              for (var i = 0; i < tabs.length; i++) {
                if (tabs[i].isActive) {
                  // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
                  // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                  // adding a tab within the `selectedIndexChange` event.
                  _this12._indexToSelect = _this12._selectedIndex = i;
                  break;
                }
              }
            }

            _this12._changeDetectorRef.markForCheck();
          });
        }
        /**
         * Listens to changes in all of the tabs.
         * @private
         * @return {?}
         */

      }, {
        key: "_subscribeToAllTabChanges",
        value: function _subscribeToAllTabChanges() {
          var _this13 = this;

          // Since we use a query with `descendants: true` to pick up the tabs, we may end up catching
          // some that are inside of nested tab groups. We filter them out manually by checking that
          // the closest group to the tab is the current one.
          this._allTabs.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(this._allTabs)).subscribe(
          /**
          * @param {?} tabs
          * @return {?}
          */
          function (tabs) {
            _this13._tabs.reset(tabs.filter(
            /**
            * @param {?} tab
            * @return {?}
            */
            function (tab) {
              // @breaking-change 10.0.0 Remove null check for `_closestTabGroup`
              // once it becomes a required parameter in MatTab.
              return !tab._closestTabGroup || tab._closestTabGroup === _this13;
            }));

            _this13._tabs.notifyOnChanges();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._tabs.destroy();

          this._tabsSubscription.unsubscribe();

          this._tabLabelSubscription.unsubscribe();
        }
        /**
         * Re-aligns the ink bar to the selected tab element.
         * @return {?}
         */

      }, {
        key: "realignInkBar",
        value: function realignInkBar() {
          if (this._tabHeader) {
            this._tabHeader._alignInkBarToSelectedTab();
          }
        }
        /**
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_focusChanged",
        value: function _focusChanged(index) {
          this.focusChange.emit(this._createChangeEvent(index));
        }
        /**
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_createChangeEvent",
        value: function _createChangeEvent(index) {
          /** @type {?} */
          var event = new MatTabChangeEvent();
          event.index = index;

          if (this._tabs && this._tabs.length) {
            event.tab = this._tabs.toArray()[index];
          }

          return event;
        }
        /**
         * Subscribes to changes in the tab labels. This is needed, because the \@Input for the label is
         * on the MatTab component, whereas the data binding is inside the MatTabGroup. In order for the
         * binding to be updated, we need to subscribe to changes in it and trigger change detection
         * manually.
         * @private
         * @return {?}
         */

      }, {
        key: "_subscribeToTabLabels",
        value: function _subscribeToTabLabels() {
          var _this14 = this;

          if (this._tabLabelSubscription) {
            this._tabLabelSubscription.unsubscribe();
          }

          this._tabLabelSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"]).apply(void 0, _toConsumableArray(this._tabs.map(
          /**
          * @param {?} tab
          * @return {?}
          */
          function (tab) {
            return tab._stateChanges;
          }))).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this14._changeDetectorRef.markForCheck();
          });
        }
        /**
         * Clamps the given index to the bounds of 0 and the tabs length.
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_clampTabIndex",
        value: function _clampTabIndex(index) {
          // Note the `|| 0`, which ensures that values like NaN can't get through
          // and which would otherwise throw the component into an infinite loop
          // (since Math.max(NaN, 0) === NaN).
          return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
        }
        /**
         * Returns a unique id for each tab label element
         * @param {?} i
         * @return {?}
         */

      }, {
        key: "_getTabLabelId",
        value: function _getTabLabelId(i) {
          return "mat-tab-label-".concat(this._groupId, "-").concat(i);
        }
        /**
         * Returns a unique id for each tab content element
         * @param {?} i
         * @return {?}
         */

      }, {
        key: "_getTabContentId",
        value: function _getTabContentId(i) {
          return "mat-tab-content-".concat(this._groupId, "-").concat(i);
        }
        /**
         * Sets the height of the body wrapper to the height of the activating tab if dynamic
         * height property is true.
         * @param {?} tabHeight
         * @return {?}
         */

      }, {
        key: "_setTabBodyWrapperHeight",
        value: function _setTabBodyWrapperHeight(tabHeight) {
          if (!this._dynamicHeight || !this._tabBodyWrapperHeight) {
            return;
          }
          /** @type {?} */


          var wrapper = this._tabBodyWrapper.nativeElement;
          wrapper.style.height = this._tabBodyWrapperHeight + 'px'; // This conditional forces the browser to paint the height so that
          // the animation to the new height can have an origin.

          if (this._tabBodyWrapper.nativeElement.offsetHeight) {
            wrapper.style.height = tabHeight + 'px';
          }
        }
        /**
         * Removes the height of the tab body wrapper.
         * @return {?}
         */

      }, {
        key: "_removeTabBodyWrapperHeight",
        value: function _removeTabBodyWrapperHeight() {
          /** @type {?} */
          var wrapper = this._tabBodyWrapper.nativeElement;
          this._tabBodyWrapperHeight = wrapper.clientHeight;
          wrapper.style.height = '';
          this.animationDone.emit();
        }
        /**
         * Handle click events, setting new selected index if appropriate.
         * @param {?} tab
         * @param {?} tabHeader
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_handleClick",
        value: function _handleClick(tab, tabHeader, index) {
          if (!tab.disabled) {
            this.selectedIndex = tabHeader.focusIndex = index;
          }
        }
        /**
         * Retrieves the tabindex for the tab.
         * @param {?} tab
         * @param {?} idx
         * @return {?}
         */

      }, {
        key: "_getTabIndex",
        value: function _getTabIndex(tab, idx) {
          if (tab.disabled) {
            return null;
          }

          return this.selectedIndex === idx ? 0 : -1;
        }
      }, {
        key: "dynamicHeight",
        get: function get() {
          return this._dynamicHeight;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._dynamicHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value);
        }
        /**
         * The index of the active tab.
         * @return {?}
         */

      }, {
        key: "selectedIndex",
        get: function get() {
          return this._selectedIndex;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._indexToSelect = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceNumberProperty"])(value, null);
        }
        /**
         * Duration for the tab animation. Will be normalized to milliseconds if no units are set.
         * @return {?}
         */

      }, {
        key: "animationDuration",
        get: function get() {
          return this._animationDuration;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._animationDuration = /^\d+$/.test(value) ? value + 'ms' : value;
        }
        /**
         * Background color of the tab group.
         * @return {?}
         */

      }, {
        key: "backgroundColor",
        get: function get() {
          return this._backgroundColor;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var nativeElement = this._elementRef.nativeElement;
          nativeElement.classList.remove("mat-background-".concat(this.backgroundColor));

          if (value) {
            nativeElement.classList.add("mat-background-".concat(value));
          }

          this._backgroundColor = value;
        }
      }]);

      return _MatTabGroupBase;
    }(_MatTabGroupMixinBase);

    _MatTabGroupBase.ɵfac = function _MatTabGroupBase_Factory(t) {
      return new (t || _MatTabGroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    _MatTabGroupBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: _MatTabGroupBase,
      inputs: {
        headerPosition: "headerPosition",
        animationDuration: "animationDuration",
        disablePagination: "disablePagination",
        dynamicHeight: "dynamicHeight",
        selectedIndex: "selectedIndex",
        backgroundColor: "backgroundColor"
      },
      outputs: {
        selectedIndexChange: "selectedIndexChange",
        focusChange: "focusChange",
        animationDone: "animationDone",
        selectedTabChange: "selectedTabChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    _MatTabGroupBase.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [MAT_TABS_CONFIG]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    _MatTabGroupBase.propDecorators = {
      dynamicHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      selectedIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      headerPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      animationDuration: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      disablePagination: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      backgroundColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      selectedIndexChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      focusChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      animationDone: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      selectedTabChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabGroupBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_TABS_CONFIG]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        headerPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        focusChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        animationDone: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        selectedTabChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        animationDuration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disablePagination: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dynamicHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * Material design tab-group component. Supports basic tab pairs (label + content) and includes
     * animated ink-bar, keyboard navigation, and screen reader.
     * See: https://material.io/design/components/tabs.html
     */


    var MatTabGroup = /*#__PURE__*/function (_MatTabGroupBase2) {
      _inherits(MatTabGroup, _MatTabGroupBase2);

      var _super7 = _createSuper(MatTabGroup);

      /**
       * @param {?} elementRef
       * @param {?} changeDetectorRef
       * @param {?=} defaultConfig
       * @param {?=} animationMode
       */
      function MatTabGroup(elementRef, changeDetectorRef, defaultConfig, animationMode) {
        _classCallCheck(this, MatTabGroup);

        return _super7.call(this, elementRef, changeDetectorRef, defaultConfig, animationMode);
      }

      return MatTabGroup;
    }(_MatTabGroupBase);

    MatTabGroup.ɵfac = function MatTabGroup_Factory(t) {
      return new (t || MatTabGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatTabGroup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: MatTabGroup,
      selectors: [["mat-tab-group"]],
      contentQueries: function MatTabGroup_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatTab, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._allTabs = _t);
        }
      },
      viewQuery: function MatTabGroup_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c3, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c4, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabBodyWrapper = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabHeader = _t.first);
        }
      },
      hostAttrs: [1, "mat-tab-group"],
      hostVars: 4,
      hostBindings: function MatTabGroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-group-dynamic-height", ctx.dynamicHeight)("mat-tab-group-inverted-header", ctx.headerPosition === "below");
        }
      },
      inputs: {
        color: "color",
        disableRipple: "disableRipple"
      },
      exportAs: ["matTabGroup"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
        provide: MAT_TAB_GROUP,
        useExisting: MatTabGroup
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 6,
      vars: 7,
      consts: [[3, "selectedIndex", "disableRipple", "disablePagination", "indexFocused", "selectFocusedIndex"], ["tabHeader", ""], ["class", "mat-tab-label mat-focus-indicator", "role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 3, "id", "mat-tab-label-active", "disabled", "matRippleDisabled", "click", 4, "ngFor", "ngForOf"], [1, "mat-tab-body-wrapper"], ["tabBodyWrapper", ""], ["role", "tabpanel", 3, "id", "mat-tab-body-active", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering", 4, "ngFor", "ngForOf"], ["role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 1, "mat-tab-label", "mat-focus-indicator", 3, "id", "disabled", "matRippleDisabled", "click"], [1, "mat-tab-label-content"], [3, "ngIf"], [3, "cdkPortalOutlet"], ["role", "tabpanel", 3, "id", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering"]],
      template: function MatTabGroup_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-tab-header", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("indexFocused", function MatTabGroup_Template_mat_tab_header_indexFocused_0_listener($event) {
            return ctx._focusChanged($event);
          })("selectFocusedIndex", function MatTabGroup_Template_mat_tab_header_selectFocusedIndex_0_listener($event) {
            return ctx.selectedIndex = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatTabGroup_div_2_Template, 4, 14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MatTabGroup_mat_tab_body_5_Template, 1, 8, "mat-tab-body", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex || 0)("disableRipple", ctx.disableRipple)("disablePagination", ctx.disablePagination);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx._tabs);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx._tabs);
        }
      },
      directives: function directives() {
        return [MatTabHeader, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], MatTabLabelWrapper, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["CdkMonitorFocus"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"], MatTabBody];
      },
      styles: [".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"],
      encapsulation: 2
    });
    /** @nocollapse */

    MatTabGroup.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [MAT_TABS_CONFIG]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatTabGroup.propDecorators = {
      _allTabs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
        args: [MatTab, {
          descendants: true
        }]
      }],
      _tabBodyWrapper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['tabBodyWrapper']
      }],
      _tabHeader: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['tabHeader']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: 'mat-tab-group',
          exportAs: 'matTabGroup',
          template: "<mat-tab-header #tabHeader\n               [selectedIndex]=\"selectedIndex || 0\"\n               [disableRipple]=\"disableRipple\"\n               [disablePagination]=\"disablePagination\"\n               (indexFocused)=\"_focusChanged($event)\"\n               (selectFocusedIndex)=\"selectedIndex = $event\">\n  <div class=\"mat-tab-label mat-focus-indicator\" role=\"tab\" matTabLabelWrapper mat-ripple cdkMonitorElementFocus\n       *ngFor=\"let tab of _tabs; let i = index\"\n       [id]=\"_getTabLabelId(i)\"\n       [attr.tabIndex]=\"_getTabIndex(tab, i)\"\n       [attr.aria-posinset]=\"i + 1\"\n       [attr.aria-setsize]=\"_tabs.length\"\n       [attr.aria-controls]=\"_getTabContentId(i)\"\n       [attr.aria-selected]=\"selectedIndex == i\"\n       [attr.aria-label]=\"tab.ariaLabel || null\"\n       [attr.aria-labelledby]=\"(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null\"\n       [class.mat-tab-label-active]=\"selectedIndex == i\"\n       [disabled]=\"tab.disabled\"\n       [matRippleDisabled]=\"tab.disabled || disableRipple\"\n       (click)=\"_handleClick(tab, tabHeader, i)\">\n\n\n    <div class=\"mat-tab-label-content\">\n      <!-- If there is a label template, use it. -->\n      <ng-template [ngIf]=\"tab.templateLabel\">\n        <ng-template [cdkPortalOutlet]=\"tab.templateLabel\"></ng-template>\n      </ng-template>\n\n      <!-- If there is not a label template, fall back to the text label. -->\n      <ng-template [ngIf]=\"!tab.templateLabel\">{{tab.textLabel}}</ng-template>\n    </div>\n  </div>\n</mat-tab-header>\n\n<div\n  class=\"mat-tab-body-wrapper\"\n  [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n  #tabBodyWrapper>\n  <mat-tab-body role=\"tabpanel\"\n               *ngFor=\"let tab of _tabs; let i = index\"\n               [id]=\"_getTabContentId(i)\"\n               [attr.aria-labelledby]=\"_getTabLabelId(i)\"\n               [class.mat-tab-body-active]=\"selectedIndex == i\"\n               [content]=\"tab.content!\"\n               [position]=\"tab.position!\"\n               [origin]=\"tab.origin\"\n               [animationDuration]=\"animationDuration\"\n               (_onCentered)=\"_removeTabBodyWrapperHeight()\"\n               (_onCentering)=\"_setTabBodyWrapperHeight($event)\">\n  </mat-tab-body>\n</div>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
          inputs: ['color', 'disableRipple'],
          providers: [{
            provide: MAT_TAB_GROUP,
            useExisting: MatTabGroup
          }],
          host: {
            'class': 'mat-tab-group',
            '[class.mat-tab-group-dynamic-height]': 'dynamicHeight',
            '[class.mat-tab-group-inverted-header]': 'headerPosition === "below"'
          },
          styles: [".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MAT_TABS_CONFIG]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        _allTabs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
          args: [MatTab, {
            descendants: true
          }]
        }],
        _tabBodyWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabBodyWrapper']
        }],
        _tabHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabHeader']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab-label-wrapper.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatTabLabelWrapper.

    /**
     * \@docs-private
     */


    var MatTabLabelWrapperBase = function MatTabLabelWrapperBase() {
      _classCallCheck(this, MatTabLabelWrapperBase);
    };
    /** @type {?} */


    var _MatTabLabelWrapperMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(MatTabLabelWrapperBase);
    /**
     * Used in the `mat-tab-group` view to display tab labels.
     * \@docs-private
     */


    var MatTabLabelWrapper = /*#__PURE__*/function (_MatTabLabelWrapperMi) {
      _inherits(MatTabLabelWrapper, _MatTabLabelWrapperMi);

      var _super8 = _createSuper(MatTabLabelWrapper);

      /**
       * @param {?} elementRef
       */
      function MatTabLabelWrapper(elementRef) {
        var _this15;

        _classCallCheck(this, MatTabLabelWrapper);

        _this15 = _super8.call(this);
        _this15.elementRef = elementRef;
        return _this15;
      }
      /**
       * Sets focus on the wrapper element
       * @return {?}
       */


      _createClass(MatTabLabelWrapper, [{
        key: "focus",
        value: function focus() {
          this.elementRef.nativeElement.focus();
        }
        /**
         * @return {?}
         */

      }, {
        key: "getOffsetLeft",
        value: function getOffsetLeft() {
          return this.elementRef.nativeElement.offsetLeft;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getOffsetWidth",
        value: function getOffsetWidth() {
          return this.elementRef.nativeElement.offsetWidth;
        }
      }]);

      return MatTabLabelWrapper;
    }(_MatTabLabelWrapperMixinBase);

    MatTabLabelWrapper.ɵfac = function MatTabLabelWrapper_Factory(t) {
      return new (t || MatTabLabelWrapper)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]));
    };

    MatTabLabelWrapper.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: MatTabLabelWrapper,
      selectors: [["", "matTabLabelWrapper", ""]],
      hostVars: 3,
      hostBindings: function MatTabLabelWrapper_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-disabled", !!ctx.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-disabled", ctx.disabled);
        }
      },
      inputs: {
        disabled: "disabled"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    MatTabLabelWrapper.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabLabelWrapper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
          selector: '[matTabLabelWrapper]',
          inputs: ['disabled'],
          host: {
            '[class.mat-tab-disabled]': 'disabled',
            '[attr.aria-disabled]': '!!disabled'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/paginated-tab-header.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Config used to bind passive event listeners
     * @type {?}
     */


    var passiveEventListenerOptions =
    /** @type {?} */
    Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["normalizePassiveListenerOptions"])({
      passive: true
    });
    /**
     * The distance in pixels that will be overshot when scrolling a tab label into view. This helps
     * provide a small affordance to the label next to it.
     * @type {?}
     */

    var EXAGGERATED_OVERSCROLL = 60;
    /**
     * Amount of milliseconds to wait before starting to scroll the header automatically.
     * Set a little conservatively in order to handle fake events dispatched on touch devices.
     * @type {?}
     */

    var HEADER_SCROLL_DELAY = 650;
    /**
     * Interval in milliseconds at which to scroll the header
     * while the user is holding their pointer.
     * @type {?}
     */

    var HEADER_SCROLL_INTERVAL = 100;
    /**
     * Base class for a tab header that supported pagination.
     * \@docs-private
     * @abstract
     */

    var MatPaginatedTabHeader = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _changeDetectorRef
       * @param {?} _viewportRuler
       * @param {?} _dir
       * @param {?} _ngZone
       * @param {?=} _platform
       * @param {?=} _animationMode
       */
      function MatPaginatedTabHeader(_elementRef, _changeDetectorRef, _viewportRuler, _dir, _ngZone, _platform, _animationMode) {
        var _this16 = this;

        _classCallCheck(this, MatPaginatedTabHeader);

        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._viewportRuler = _viewportRuler;
        this._dir = _dir;
        this._ngZone = _ngZone;
        this._platform = _platform;
        this._animationMode = _animationMode;
        /**
         * The distance in pixels that the tab labels should be translated to the left.
         */

        this._scrollDistance = 0;
        /**
         * Whether the header should scroll to the selected index after the view has been checked.
         */

        this._selectedIndexChanged = false;
        /**
         * Emits when the component is destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Whether the controls for pagination should be displayed
         */

        this._showPaginationControls = false;
        /**
         * Whether the tab list can be scrolled more towards the end of the tab label list.
         */

        this._disableScrollAfter = true;
        /**
         * Whether the tab list can be scrolled more towards the beginning of the tab label list.
         */

        this._disableScrollBefore = true;
        /**
         * Stream that will stop the automated scrolling.
         */

        this._stopScrolling = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Whether pagination should be disabled. This can be used to avoid unnecessary
         * layout recalculations if it's known that pagination won't be required.
         */

        this.disablePagination = false;
        this._selectedIndex = 0;
        /**
         * Event emitted when the option is selected.
         */

        this.selectFocusedIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event emitted when a label is focused.
         */

        this.indexFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](); // Bind the `mouseleave` event on the outside since it doesn't change anything in the view.

        _ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        function () {
          Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(_elementRef.nativeElement, 'mouseleave').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(_this16._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this16._stopInterval();
          });
        });
      }
      /**
       * The index of the active tab.
       * @return {?}
       */


      _createClass(MatPaginatedTabHeader, [{
        key: "ngAfterViewInit",

        /**
         * @return {?}
         */
        value: function ngAfterViewInit() {
          var _this17 = this;

          // We need to handle these events manually, because we want to bind passive event listeners.
          Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this._previousPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this17._handlePaginatorPress('before');
          });
          Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this._nextPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this17._handlePaginatorPress('after');
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this18 = this;

          /** @type {?} */
          var dirChange = this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(null);
          /** @type {?} */

          var resize = this._viewportRuler.change(150);
          /** @type {?} */


          var realign =
          /**
          * @return {?}
          */
          function realign() {
            _this18.updatePagination();

            _this18._alignInkBarToSelectedTab();
          };

          this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusKeyManager"](this._items).withHorizontalOrientation(this._getLayoutDirection()).withWrap();

          this._keyManager.updateActiveItem(0); // Defer the first call in order to allow for slower browsers to lay out the elements.
          // This helps in cases where the user lands directly on a page with paginated tabs.


          typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame(realign) : realign(); // On dir change or window resize, realign the ink bar and update the orientation of
          // the key manager if the direction has changed.

          Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(dirChange, resize, this._items.changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            // We need to defer this to give the browser some time to recalculate the element dimensions.
            Promise.resolve().then(realign);

            _this18._keyManager.withHorizontalOrientation(_this18._getLayoutDirection());
          }); // If there is a change in the focus key manager we need to emit the `indexFocused`
          // event in order to provide a public event that notifies about focus changes. Also we realign
          // the tabs container by scrolling the new focused tab into the visible section.

          this._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @param {?} newFocusIndex
          * @return {?}
          */
          function (newFocusIndex) {
            _this18.indexFocused.emit(newFocusIndex);

            _this18._setTabFocus(newFocusIndex);
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          // If the number of tab labels have changed, check if scrolling should be enabled
          if (this._tabLabelCount != this._items.length) {
            this.updatePagination();
            this._tabLabelCount = this._items.length;

            this._changeDetectorRef.markForCheck();
          } // If the selected index has changed, scroll to the label and check if the scrolling controls
          // should be disabled.


          if (this._selectedIndexChanged) {
            this._scrollToLabel(this._selectedIndex);

            this._checkScrollingControls();

            this._alignInkBarToSelectedTab();

            this._selectedIndexChanged = false;

            this._changeDetectorRef.markForCheck();
          } // If the scroll distance has been changed (tab selected, focused, scroll controls activated),
          // then translate the header to reflect this.


          if (this._scrollDistanceChanged) {
            this._updateTabScrollPosition();

            this._scrollDistanceChanged = false;

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();

          this._stopScrolling.complete();
        }
        /**
         * Handles keyboard events on the header.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleKeydown",
        value: function _handleKeydown(event) {
          // We don't handle any key bindings with a modifier key.
          if (Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["hasModifierKey"])(event)) {
            return;
          }

          switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["HOME"]:
              this._keyManager.setFirstItemActive();

              event.preventDefault();
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["END"]:
              this._keyManager.setLastItemActive();

              event.preventDefault();
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["ENTER"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__["SPACE"]:
              if (this.focusIndex !== this.selectedIndex) {
                this.selectFocusedIndex.emit(this.focusIndex);

                this._itemSelected(event);
              }

              break;

            default:
              this._keyManager.onKeydown(event);

          }
        }
        /**
         * Callback for when the MutationObserver detects that the content has changed.
         * @return {?}
         */

      }, {
        key: "_onContentChanges",
        value: function _onContentChanges() {
          var _this19 = this;

          /** @type {?} */
          var textContent = this._elementRef.nativeElement.textContent; // We need to diff the text content of the header, because the MutationObserver callback
          // will fire even if the text content didn't change which is inefficient and is prone
          // to infinite loops if a poorly constructed expression is passed in (see #14249).

          if (textContent !== this._currentTextContent) {
            this._currentTextContent = textContent || ''; // The content observer runs outside the `NgZone` by default, which
            // means that we need to bring the callback back in ourselves.

            this._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              _this19.updatePagination();

              _this19._alignInkBarToSelectedTab();

              _this19._changeDetectorRef.markForCheck();
            });
          }
        }
        /**
         * Updates the view whether pagination should be enabled or not.
         *
         * WARNING: Calling this method can be very costly in terms of performance. It should be called
         * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
         * page.
         * @return {?}
         */

      }, {
        key: "updatePagination",
        value: function updatePagination() {
          this._checkPaginationEnabled();

          this._checkScrollingControls();

          this._updateTabScrollPosition();
        }
        /**
         * Tracks which element has focus; used for keyboard navigation
         * @return {?}
         */

      }, {
        key: "_isValidIndex",

        /**
         * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
         * providing a valid index and return true.
         * @param {?} index
         * @return {?}
         */
        value: function _isValidIndex(index) {
          if (!this._items) {
            return true;
          }
          /** @type {?} */


          var tab = this._items ? this._items.toArray()[index] : null;
          return !!tab && !tab.disabled;
        }
        /**
         * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
         * scrolling is enabled.
         * @param {?} tabIndex
         * @return {?}
         */

      }, {
        key: "_setTabFocus",
        value: function _setTabFocus(tabIndex) {
          if (this._showPaginationControls) {
            this._scrollToLabel(tabIndex);
          }

          if (this._items && this._items.length) {
            this._items.toArray()[tabIndex].focus(); // Do not let the browser manage scrolling to focus the element, this will be handled
            // by using translation. In LTR, the scroll left should be 0. In RTL, the scroll width
            // should be the full width minus the offset width.

            /** @type {?} */


            var containerEl = this._tabListContainer.nativeElement;
            /** @type {?} */

            var dir = this._getLayoutDirection();

            if (dir == 'ltr') {
              containerEl.scrollLeft = 0;
            } else {
              containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
            }
          }
        }
        /**
         * The layout direction of the containing app.
         * @return {?}
         */

      }, {
        key: "_getLayoutDirection",
        value: function _getLayoutDirection() {
          return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
        }
        /**
         * Performs the CSS transformation on the tab list that will cause the list to scroll.
         * @return {?}
         */

      }, {
        key: "_updateTabScrollPosition",
        value: function _updateTabScrollPosition() {
          if (this.disablePagination) {
            return;
          }
          /** @type {?} */


          var scrollDistance = this.scrollDistance;
          /** @type {?} */

          var platform = this._platform;
          /** @type {?} */

          var translateX = this._getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance; // Don't use `translate3d` here because we don't want to create a new layer. A new layer
          // seems to cause flickering and overflow in Internet Explorer. For example, the ink bar
          // and ripples will exceed the boundaries of the visible tab bar.
          // See: https://github.com/angular/components/issues/10276
          // We round the `transform` here, because transforms with sub-pixel precision cause some
          // browsers to blur the content of the element.

          this._tabList.nativeElement.style.transform = "translateX(".concat(Math.round(translateX), "px)"); // Setting the `transform` on IE will change the scroll offset of the parent, causing the
          // position to be thrown off in some cases. We have to reset it ourselves to ensure that
          // it doesn't get thrown off. Note that we scope it only to IE and Edge, because messing
          // with the scroll position throws off Chrome 71+ in RTL mode (see #14689).
          // @breaking-change 9.0.0 Remove null check for `platform` after it can no longer be undefined.

          if (platform && (platform.TRIDENT || platform.EDGE)) {
            this._tabListContainer.nativeElement.scrollLeft = 0;
          }
        }
        /**
         * Sets the distance in pixels that the tab header should be transformed in the X-axis.
         * @return {?}
         */

      }, {
        key: "_scrollHeader",

        /**
         * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
         * the end of the list, respectively). The distance to scroll is computed to be a third of the
         * length of the tab list view window.
         *
         * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
         * should be called sparingly.
         * @param {?} direction
         * @return {?}
         */
        value: function _scrollHeader(direction) {
          /** @type {?} */
          var viewLength = this._tabListContainer.nativeElement.offsetWidth; // Move the scroll distance one-third the length of the tab list's viewport.

          /** @type {?} */

          var scrollAmount = (direction == 'before' ? -1 : 1) * viewLength / 3;
          return this._scrollTo(this._scrollDistance + scrollAmount);
        }
        /**
         * Handles click events on the pagination arrows.
         * @param {?} direction
         * @return {?}
         */

      }, {
        key: "_handlePaginatorClick",
        value: function _handlePaginatorClick(direction) {
          this._stopInterval();

          this._scrollHeader(direction);
        }
        /**
         * Moves the tab list such that the desired tab label (marked by index) is moved into view.
         *
         * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
         * should be called sparingly.
         * @param {?} labelIndex
         * @return {?}
         */

      }, {
        key: "_scrollToLabel",
        value: function _scrollToLabel(labelIndex) {
          if (this.disablePagination) {
            return;
          }
          /** @type {?} */


          var selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;

          if (!selectedLabel) {
            return;
          } // The view length is the visible width of the tab labels.

          /** @type {?} */


          var viewLength = this._tabListContainer.nativeElement.offsetWidth;
          var _selectedLabel$elemen = selectedLabel.elementRef.nativeElement,
              offsetLeft = _selectedLabel$elemen.offsetLeft,
              offsetWidth = _selectedLabel$elemen.offsetWidth;
          /** @type {?} */

          var labelBeforePos;
          /** @type {?} */

          var labelAfterPos;

          if (this._getLayoutDirection() == 'ltr') {
            labelBeforePos = offsetLeft;
            labelAfterPos = labelBeforePos + offsetWidth;
          } else {
            labelAfterPos = this._tabList.nativeElement.offsetWidth - offsetLeft;
            labelBeforePos = labelAfterPos - offsetWidth;
          }
          /** @type {?} */


          var beforeVisiblePos = this.scrollDistance;
          /** @type {?} */

          var afterVisiblePos = this.scrollDistance + viewLength;

          if (labelBeforePos < beforeVisiblePos) {
            // Scroll header to move label to the before direction
            this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
          } else if (labelAfterPos > afterVisiblePos) {
            // Scroll header to move label to the after direction
            this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
          }
        }
        /**
         * Evaluate whether the pagination controls should be displayed. If the scroll width of the
         * tab list is wider than the size of the header container, then the pagination controls should
         * be shown.
         *
         * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
         * should be called sparingly.
         * @return {?}
         */

      }, {
        key: "_checkPaginationEnabled",
        value: function _checkPaginationEnabled() {
          if (this.disablePagination) {
            this._showPaginationControls = false;
          } else {
            /** @type {?} */
            var isEnabled = this._tabList.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;

            if (!isEnabled) {
              this.scrollDistance = 0;
            }

            if (isEnabled !== this._showPaginationControls) {
              this._changeDetectorRef.markForCheck();
            }

            this._showPaginationControls = isEnabled;
          }
        }
        /**
         * Evaluate whether the before and after controls should be enabled or disabled.
         * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
         * before button. If the header is at the end of the list (scroll distance is equal to the
         * maximum distance we can scroll), then disable the after button.
         *
         * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
         * should be called sparingly.
         * @return {?}
         */

      }, {
        key: "_checkScrollingControls",
        value: function _checkScrollingControls() {
          if (this.disablePagination) {
            this._disableScrollAfter = this._disableScrollBefore = true;
          } else {
            // Check if the pagination arrows should be activated.
            this._disableScrollBefore = this.scrollDistance == 0;
            this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * Determines what is the maximum length in pixels that can be set for the scroll distance. This
         * is equal to the difference in width between the tab list container and tab header container.
         *
         * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
         * should be called sparingly.
         * @return {?}
         */

      }, {
        key: "_getMaxScrollDistance",
        value: function _getMaxScrollDistance() {
          /** @type {?} */
          var lengthOfTabList = this._tabList.nativeElement.scrollWidth;
          /** @type {?} */

          var viewLength = this._tabListContainer.nativeElement.offsetWidth;
          return lengthOfTabList - viewLength || 0;
        }
        /**
         * Tells the ink-bar to align itself to the current label wrapper
         * @return {?}
         */

      }, {
        key: "_alignInkBarToSelectedTab",
        value: function _alignInkBarToSelectedTab() {
          /** @type {?} */
          var selectedItem = this._items && this._items.length ? this._items.toArray()[this.selectedIndex] : null;
          /** @type {?} */

          var selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;

          if (selectedLabelWrapper) {
            this._inkBar.alignToElement(selectedLabelWrapper);
          } else {
            this._inkBar.hide();
          }
        }
        /**
         * Stops the currently-running paginator interval.
         * @return {?}
         */

      }, {
        key: "_stopInterval",
        value: function _stopInterval() {
          this._stopScrolling.next();
        }
        /**
         * Handles the user pressing down on one of the paginators.
         * Starts scrolling the header after a certain amount of time.
         * @param {?} direction In which direction the paginator should be scrolled.
         * @param {?=} mouseEvent
         * @return {?}
         */

      }, {
        key: "_handlePaginatorPress",
        value: function _handlePaginatorPress(direction, mouseEvent) {
          var _this20 = this;

          // Don't start auto scrolling for right mouse button clicks. Note that we shouldn't have to
          // null check the `button`, but we do it so we don't break tests that use fake events.
          if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
            return;
          } // Avoid overlapping timers.


          this._stopInterval(); // Start a timer after the delay and keep firing based on the interval.


          Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["timer"])(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL) // Keep the timer going until something tells it to stop or the component is destroyed.
          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this._stopScrolling, this._destroyed))).subscribe(
          /**
          * @return {?}
          */
          function () {
            var _this20$_scrollHeader = _this20._scrollHeader(direction),
                maxScrollDistance = _this20$_scrollHeader.maxScrollDistance,
                distance = _this20$_scrollHeader.distance; // Stop the timer if we've reached the start or the end.


            if (distance === 0 || distance >= maxScrollDistance) {
              _this20._stopInterval();
            }
          });
        }
        /**
         * Scrolls the header to a given position.
         * @private
         * @param {?} position Position to which to scroll.
         * @return {?} Information on the current scroll distance and the maximum.
         */

      }, {
        key: "_scrollTo",
        value: function _scrollTo(position) {
          if (this.disablePagination) {
            return {
              maxScrollDistance: 0,
              distance: 0
            };
          }
          /** @type {?} */


          var maxScrollDistance = this._getMaxScrollDistance();

          this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position)); // Mark that the scroll distance has changed so that after the view is checked, the CSS
          // transformation can move the header.

          this._scrollDistanceChanged = true;

          this._checkScrollingControls();

          return {
            maxScrollDistance: maxScrollDistance,
            distance: this._scrollDistance
          };
        }
      }, {
        key: "selectedIndex",
        get: function get() {
          return this._selectedIndex;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceNumberProperty"])(value);

          if (this._selectedIndex != value) {
            this._selectedIndexChanged = true;
            this._selectedIndex = value;

            if (this._keyManager) {
              this._keyManager.updateActiveItem(value);
            }
          }
        }
      }, {
        key: "focusIndex",
        get: function get() {
          return this._keyManager ?
          /** @type {?} */
          this._keyManager.activeItemIndex : 0;
        }
        /**
         * When the focus index is set, we must manually send focus to the correct label
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
            return;
          }

          this._keyManager.setActiveItem(value);
        }
      }, {
        key: "scrollDistance",
        get: function get() {
          return this._scrollDistance;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._scrollTo(value);
        }
      }]);

      return MatPaginatedTabHeader;
    }();

    MatPaginatedTabHeader.ɵfac = function MatPaginatedTabHeader_Factory(t) {
      return new (t || MatPaginatedTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatPaginatedTabHeader.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: MatPaginatedTabHeader,
      inputs: {
        disablePagination: "disablePagination"
      }
    });
    /** @nocollapse */

    MatPaginatedTabHeader.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatPaginatedTabHeader.propDecorators = {
      disablePagination: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatPaginatedTabHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        disablePagination: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab-header.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Base class with all of the `MatTabHeader` functionality.
     * \@docs-private
     * @abstract
     */
    // tslint:disable-next-line:class-name


    var _MatTabHeaderBase = /*#__PURE__*/function (_MatPaginatedTabHeade) {
      _inherits(_MatTabHeaderBase, _MatPaginatedTabHeade);

      var _super9 = _createSuper(_MatTabHeaderBase);

      /**
       * @param {?} elementRef
       * @param {?} changeDetectorRef
       * @param {?} viewportRuler
       * @param {?} dir
       * @param {?} ngZone
       * @param {?} platform
       * @param {?=} animationMode
       */
      function _MatTabHeaderBase(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
      animationMode) {
        var _this21;

        _classCallCheck(this, _MatTabHeaderBase);

        _this21 = _super9.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
        _this21._disableRipple = false;
        return _this21;
      }
      /**
       * Whether the ripple effect is disabled or not.
       * @return {?}
       */


      _createClass(_MatTabHeaderBase, [{
        key: "_itemSelected",

        /**
         * @protected
         * @param {?} event
         * @return {?}
         */
        value: function _itemSelected(event) {
          event.preventDefault();
        }
      }, {
        key: "disableRipple",
        get: function get() {
          return this._disableRipple;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value);
        }
      }]);

      return _MatTabHeaderBase;
    }(MatPaginatedTabHeader);

    _MatTabHeaderBase.ɵfac = function _MatTabHeaderBase_Factory(t) {
      return new (t || _MatTabHeaderBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    _MatTabHeaderBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: _MatTabHeaderBase,
      inputs: {
        disableRipple: "disableRipple"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    _MatTabHeaderBase.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    _MatTabHeaderBase.propDecorators = {
      disableRipple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabHeaderBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        disableRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * The header of the tab group which displays a list of all the tabs in the tab group. Includes
     * an ink bar that follows the currently selected tab. When the tabs list's width exceeds the
     * width of the header container, then arrows will be displayed to allow the user to scroll
     * left and right across the header.
     * \@docs-private
     */


    var MatTabHeader = /*#__PURE__*/function (_MatTabHeaderBase2) {
      _inherits(MatTabHeader, _MatTabHeaderBase2);

      var _super10 = _createSuper(MatTabHeader);

      /**
       * @param {?} elementRef
       * @param {?} changeDetectorRef
       * @param {?} viewportRuler
       * @param {?} dir
       * @param {?} ngZone
       * @param {?} platform
       * @param {?=} animationMode
       */
      function MatTabHeader(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
      animationMode) {
        _classCallCheck(this, MatTabHeader);

        return _super10.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
      }

      return MatTabHeader;
    }(_MatTabHeaderBase);

    MatTabHeader.ɵfac = function MatTabHeader_Factory(t) {
      return new (t || MatTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatTabHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: MatTabHeader,
      selectors: [["mat-tab-header"]],
      contentQueries: function MatTabHeader_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatTabLabelWrapper, false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._items = _t);
        }
      },
      viewQuery: function MatTabHeader_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](MatInkBar, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c5, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c6, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c7, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c8, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._inkBar = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
        }
      },
      hostAttrs: [1, "mat-tab-header"],
      hostVars: 4,
      hostBindings: function MatTabHeader_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-tab-header-rtl", ctx._getLayoutDirection() == "rtl");
        }
      },
      inputs: {
        selectedIndex: "selectedIndex"
      },
      outputs: {
        selectFocusedIndex: "selectFocusedIndex",
        indexFocused: "indexFocused"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 13,
      vars: 8,
      consts: [["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "matRippleDisabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-tab-header-pagination-chevron"], [1, "mat-tab-label-container", 3, "keydown"], ["tabListContainer", ""], ["role", "tablist", 1, "mat-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-tab-labels"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "matRippleDisabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]],
      template: function MatTabHeader_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatTabHeader_Template_div_click_0_listener() {
            return ctx._handlePaginatorClick("before");
          })("mousedown", function MatTabHeader_Template_div_mousedown_0_listener($event) {
            return ctx._handlePaginatorPress("before", $event);
          })("touchend", function MatTabHeader_Template_div_touchend_0_listener() {
            return ctx._stopInterval();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function MatTabHeader_Template_div_keydown_3_listener($event) {
            return ctx._handleKeydown($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkObserveContent", function MatTabHeader_Template_div_cdkObserveContent_5_listener() {
            return ctx._onContentChanges();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-ink-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mousedown", function MatTabHeader_Template_div_mousedown_10_listener($event) {
            return ctx._handlePaginatorPress("after", $event);
          })("click", function MatTabHeader_Template_div_click_10_listener() {
            return ctx._handlePaginatorClick("after");
          })("touchend", function MatTabHeader_Template_div_touchend_10_listener() {
            return ctx._stopInterval();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollBefore);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollAfter);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
        }
      },
      directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["CdkObserveContent"], MatInkBar],
      styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n"],
      encapsulation: 2
    });
    /** @nocollapse */

    MatTabHeader.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatTabHeader.propDecorators = {
      _items: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
        args: [MatTabLabelWrapper, {
          descendants: false
        }]
      }],
      _inkBar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: [MatInkBar, {
          "static": true
        }]
      }],
      _tabListContainer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['tabListContainer', {
          "static": true
        }]
      }],
      _tabList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['tabList', {
          "static": true
        }]
      }],
      _nextPaginator: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['nextPaginator']
      }],
      _previousPaginator: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['previousPaginator']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: 'mat-tab-header',
          template: "<div class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n\n<div class=\"mat-tab-label-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\">\n  <div\n    #tabList\n    class=\"mat-tab-list\"\n    [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n    role=\"tablist\"\n    (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-tab-labels\">\n      <ng-content></ng-content>\n    </div>\n    <mat-ink-bar></mat-ink-bar>\n  </div>\n</div>\n\n<div class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n",
          inputs: ['selectedIndex'],
          outputs: ['selectFocusedIndex', 'indexFocused'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
          host: {
            'class': 'mat-tab-header',
            '[class.mat-tab-header-pagination-controls-enabled]': '_showPaginationControls',
            '[class.mat-tab-header-rtl]': "_getLayoutDirection() == 'rtl'"
          },
          styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        _items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
          args: [MatTabLabelWrapper, {
            descendants: false
          }]
        }],
        _inkBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatInkBar, {
            "static": true
          }]
        }],
        _tabListContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabListContainer', {
            "static": true
          }]
        }],
        _tabList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabList', {
            "static": true
          }]
        }],
        _nextPaginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['nextPaginator']
        }],
        _previousPaginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['previousPaginator']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab-nav-bar/tab-nav-bar.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Base class with all of the `MatTabNav` functionality.
     * \@docs-private
     * @abstract
     */
    // tslint:disable-next-line:class-name


    var _MatTabNavBase = /*#__PURE__*/function (_MatPaginatedTabHeade2) {
      _inherits(_MatTabNavBase, _MatPaginatedTabHeade2);

      var _super11 = _createSuper(_MatTabNavBase);

      /**
       * @param {?} elementRef
       * @param {?} dir
       * @param {?} ngZone
       * @param {?} changeDetectorRef
       * @param {?} viewportRuler
       * @param {?=} platform
       * @param {?=} animationMode
       */
      function _MatTabNavBase(elementRef, dir, ngZone, changeDetectorRef, viewportRuler,
      /**
       * @deprecated @breaking-change 9.0.0 `platform` parameter to become required.
       */
      platform, animationMode) {
        var _this22;

        _classCallCheck(this, _MatTabNavBase);

        _this22 = _super11.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
        _this22._disableRipple = false;
        /**
         * Theme color of the nav bar.
         */

        _this22.color = 'primary';
        return _this22;
      }
      /**
       * Background color of the tab nav.
       * @return {?}
       */


      _createClass(_MatTabNavBase, [{
        key: "_itemSelected",

        /**
         * @protected
         * @return {?}
         */
        value: function _itemSelected() {// noop
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this23 = this;

          // We need this to run before the `changes` subscription in parent to ensure that the
          // selectedIndex is up-to-date by the time the super class starts looking for it.
          this._items.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this23.updateActiveLink();
          });

          _get(_getPrototypeOf(_MatTabNavBase.prototype), "ngAfterContentInit", this).call(this);
        }
        /**
         * Notifies the component that the active link has been changed.
         * \@breaking-change 8.0.0 `element` parameter to be removed.
         * @param {?=} _element
         * @return {?}
         */

      }, {
        key: "updateActiveLink",
        value: function updateActiveLink(_element) {
          if (!this._items) {
            return;
          }
          /** @type {?} */


          var items = this._items.toArray();

          for (var i = 0; i < items.length; i++) {
            if (items[i].active) {
              this.selectedIndex = i;

              this._changeDetectorRef.markForCheck();

              return;
            }
          } // The ink bar should hide itself if no items are active.


          this.selectedIndex = -1;

          this._inkBar.hide();
        }
      }, {
        key: "backgroundColor",
        get: function get() {
          return this._backgroundColor;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var classList = this._elementRef.nativeElement.classList;
          classList.remove("mat-background-".concat(this.backgroundColor));

          if (value) {
            classList.add("mat-background-".concat(value));
          }

          this._backgroundColor = value;
        }
        /**
         * Whether the ripple effect is disabled or not.
         * @return {?}
         */

      }, {
        key: "disableRipple",
        get: function get() {
          return this._disableRipple;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__["coerceBooleanProperty"])(value);
        }
      }]);

      return _MatTabNavBase;
    }(MatPaginatedTabHeader);

    _MatTabNavBase.ɵfac = function _MatTabNavBase_Factory(t) {
      return new (t || _MatTabNavBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    _MatTabNavBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: _MatTabNavBase,
      inputs: {
        color: "color",
        backgroundColor: "backgroundColor",
        disableRipple: "disableRipple"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    _MatTabNavBase.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    _MatTabNavBase.propDecorators = {
      backgroundColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      disableRipple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabNavBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disableRipple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * Navigation component matching the styles of the tab group header.
     * Provides anchored navigation with animated ink bar.
     */


    var MatTabNav = /*#__PURE__*/function (_MatTabNavBase2) {
      _inherits(MatTabNav, _MatTabNavBase2);

      var _super12 = _createSuper(MatTabNav);

      /**
       * @param {?} elementRef
       * @param {?} dir
       * @param {?} ngZone
       * @param {?} changeDetectorRef
       * @param {?} viewportRuler
       * @param {?=} platform
       * @param {?=} animationMode
       */
      function MatTabNav(elementRef, dir, ngZone, changeDetectorRef, viewportRuler,
      /**
       * @deprecated @breaking-change 9.0.0 `platform` parameter to become required.
       */
      platform, animationMode) {
        _classCallCheck(this, MatTabNav);

        return _super12.call(this, elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode);
      }

      return MatTabNav;
    }(_MatTabNavBase);

    MatTabNav.ɵfac = function MatTabNav_Factory(t) {
      return new (t || MatTabNav)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatTabNav.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: MatTabNav,
      selectors: [["", "mat-tab-nav-bar", ""]],
      contentQueries: function MatTabNav_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatTabLink, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._items = _t);
        }
      },
      viewQuery: function MatTabNav_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](MatInkBar, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c5, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c6, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c7, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c8, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._inkBar = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
        }
      },
      hostAttrs: [1, "mat-tab-nav-bar", "mat-tab-header"],
      hostVars: 10,
      hostBindings: function MatTabNav_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-tab-header-rtl", ctx._getLayoutDirection() == "rtl")("mat-primary", ctx.color !== "warn" && ctx.color !== "accent")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn");
        }
      },
      inputs: {
        color: "color"
      },
      exportAs: ["matTabNavBar", "matTabNav"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      attrs: _c9,
      ngContentSelectors: _c0,
      decls: 13,
      vars: 8,
      consts: [["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "matRippleDisabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-tab-header-pagination-chevron"], [1, "mat-tab-link-container", 3, "keydown"], ["tabListContainer", ""], [1, "mat-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-tab-links"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "matRippleDisabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]],
      template: function MatTabNav_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatTabNav_Template_div_click_0_listener() {
            return ctx._handlePaginatorClick("before");
          })("mousedown", function MatTabNav_Template_div_mousedown_0_listener($event) {
            return ctx._handlePaginatorPress("before", $event);
          })("touchend", function MatTabNav_Template_div_touchend_0_listener() {
            return ctx._stopInterval();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function MatTabNav_Template_div_keydown_3_listener($event) {
            return ctx._handleKeydown($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkObserveContent", function MatTabNav_Template_div_cdkObserveContent_5_listener() {
            return ctx._onContentChanges();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "mat-ink-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mousedown", function MatTabNav_Template_div_mousedown_10_listener($event) {
            return ctx._handlePaginatorPress("after", $event);
          })("click", function MatTabNav_Template_div_click_10_listener() {
            return ctx._handlePaginatorClick("after");
          })("touchend", function MatTabNav_Template_div_touchend_10_listener() {
            return ctx._stopInterval();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollBefore);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollAfter);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
        }
      },
      directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["CdkObserveContent"], MatInkBar],
      styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n"],
      encapsulation: 2
    });
    /** @nocollapse */

    MatTabNav.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatTabNav.propDecorators = {
      _items: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
        args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return MatTabLink;
        }), {
          descendants: true
        }]
      }],
      _inkBar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: [MatInkBar, {
          "static": true
        }]
      }],
      _tabListContainer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['tabListContainer', {
          "static": true
        }]
      }],
      _tabList: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['tabList', {
          "static": true
        }]
      }],
      _nextPaginator: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['nextPaginator']
      }],
      _previousPaginator: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['previousPaginator']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabNav, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: '[mat-tab-nav-bar]',
          exportAs: 'matTabNavBar, matTabNav',
          inputs: ['color'],
          template: "<div class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-elevation-z4\"\n     #previousPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollBefore || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollBefore\"\n     (click)=\"_handlePaginatorClick('before')\"\n     (mousedown)=\"_handlePaginatorPress('before', $event)\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n\n<div class=\"mat-tab-link-container\" #tabListContainer (keydown)=\"_handleKeydown($event)\">\n  <div\n    class=\"mat-tab-list\"\n    [class._mat-animation-noopable]=\"_animationMode === 'NoopAnimations'\"\n    #tabList\n    (cdkObserveContent)=\"_onContentChanges()\">\n    <div class=\"mat-tab-links\">\n      <ng-content></ng-content>\n    </div>\n    <mat-ink-bar></mat-ink-bar>\n  </div>\n</div>\n\n<div class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-elevation-z4\"\n     #nextPaginator\n     aria-hidden=\"true\"\n     mat-ripple [matRippleDisabled]=\"_disableScrollAfter || disableRipple\"\n     [class.mat-tab-header-pagination-disabled]=\"_disableScrollAfter\"\n     (mousedown)=\"_handlePaginatorPress('after', $event)\"\n     (click)=\"_handlePaginatorClick('after')\"\n     (touchend)=\"_stopInterval()\">\n  <div class=\"mat-tab-header-pagination-chevron\"></div>\n</div>\n",
          host: {
            'class': 'mat-tab-nav-bar mat-tab-header',
            '[class.mat-tab-header-pagination-controls-enabled]': '_showPaginationControls',
            '[class.mat-tab-header-rtl]': "_getLayoutDirection() == 'rtl'",
            '[class.mat-primary]': 'color !== "warn" && color !== "accent"',
            '[class.mat-accent]': 'color === "accent"',
            '[class.mat-warn]': 'color === "warn"'
          },
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].Default,
          styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        _items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return MatTabLink;
          }), {
            descendants: true
          }]
        }],
        _inkBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [MatInkBar, {
            "static": true
          }]
        }],
        _tabListContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabListContainer', {
            "static": true
          }]
        }],
        _tabList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['tabList', {
            "static": true
          }]
        }],
        _nextPaginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['nextPaginator']
        }],
        _previousPaginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['previousPaginator']
        }]
      });
    })();

    if (false) {} // Boilerplate for applying mixins to MatTabLink.


    var MatTabLinkMixinBase = function MatTabLinkMixinBase() {
      _classCallCheck(this, MatTabLinkMixinBase);
    };
    /** @type {?} */


    var _MatTabLinkMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(MatTabLinkMixinBase)));
    /**
     * Base class with all of the `MatTabLink` functionality.
     */
    // tslint:disable-next-line:class-name


    var _MatTabLinkBase = /*#__PURE__*/function (_MatTabLinkMixinBase2) {
      _inherits(_MatTabLinkBase, _MatTabLinkMixinBase2);

      var _super13 = _createSuper(_MatTabLinkBase);

      /**
       * @param {?} _tabNavBar
       * @param {?} elementRef
       * @param {?} globalRippleOptions
       * @param {?} tabIndex
       * @param {?} _focusMonitor
       * @param {?=} animationMode
       */
      function _MatTabLinkBase(_tabNavBar, elementRef, globalRippleOptions, tabIndex, _focusMonitor, animationMode) {
        var _this24;

        _classCallCheck(this, _MatTabLinkBase);

        _this24 = _super13.call(this);
        _this24._tabNavBar = _tabNavBar;
        _this24.elementRef = elementRef;
        _this24._focusMonitor = _focusMonitor;
        /**
         * Whether the tab link is active or not.
         */

        _this24._isActive = false;
        _this24.rippleConfig = globalRippleOptions || {};
        _this24.tabIndex = parseInt(tabIndex) || 0;

        if (animationMode === 'NoopAnimations') {
          _this24.rippleConfig.animation = {
            enterDuration: 0,
            exitDuration: 0
          };
        }

        _focusMonitor.monitor(elementRef);

        return _this24;
      }
      /**
       * Whether the link is active.
       * @return {?}
       */


      _createClass(_MatTabLinkBase, [{
        key: "focus",

        /**
         * @return {?}
         */
        value: function focus() {
          this.elementRef.nativeElement.focus();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._focusMonitor.stopMonitoring(this.elementRef);
        }
      }, {
        key: "active",
        get: function get() {
          return this._isActive;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== this._isActive) {
            this._isActive = value;

            this._tabNavBar.updateActiveLink(this.elementRef);
          }
        }
        /**
         * Whether ripples are disabled on interaction.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "rippleDisabled",
        get: function get() {
          return this.disabled || this.disableRipple || this._tabNavBar.disableRipple || !!this.rippleConfig.disabled;
        }
      }]);

      return _MatTabLinkBase;
    }(_MatTabLinkMixinBase);

    _MatTabLinkBase.ɵfac = function _MatTabLinkBase_Factory(t) {
      return new (t || _MatTabLinkBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_MatTabNavBase), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    _MatTabLinkBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: _MatTabLinkBase,
      inputs: {
        active: "active"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    _MatTabLinkBase.ctorParameters = function () {
      return [{
        type: _MatTabNavBase
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    _MatTabLinkBase.propDecorators = {
      active: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](_MatTabLinkBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
      }], function () {
        return [{
          type: _MatTabNavBase
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * Link inside of a `mat-tab-nav-bar`.
     */


    var MatTabLink = /*#__PURE__*/function (_MatTabLinkBase2) {
      _inherits(MatTabLink, _MatTabLinkBase2);

      var _super14 = _createSuper(MatTabLink);

      /**
       * @param {?} tabNavBar
       * @param {?} elementRef
       * @param {?} ngZone
       * @param {?} platform
       * @param {?} globalRippleOptions
       * @param {?} tabIndex
       * @param {?} focusMonitor
       * @param {?=} animationMode
       */
      function MatTabLink(tabNavBar, elementRef, ngZone, platform, globalRippleOptions, tabIndex, focusMonitor, animationMode) {
        var _this25;

        _classCallCheck(this, MatTabLink);

        _this25 = _super14.call(this, tabNavBar, elementRef, globalRippleOptions, tabIndex, focusMonitor, animationMode);
        _this25._tabLinkRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["RippleRenderer"](_assertThisInitialized(_this25), ngZone, elementRef, platform);

        _this25._tabLinkRipple.setupTriggerEvents(elementRef.nativeElement);

        return _this25;
      }
      /**
       * @return {?}
       */


      _createClass(MatTabLink, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(MatTabLink.prototype), "ngOnDestroy", this).call(this);

          this._tabLinkRipple._removeTriggerEvents();
        }
      }]);

      return MatTabLink;
    }(_MatTabLinkBase);

    MatTabLink.ɵfac = function MatTabLink_Factory(t) {
      return new (t || MatTabLink)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatTabNav), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatTabLink.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
      type: MatTabLink,
      selectors: [["", "mat-tab-link", ""], ["", "matTabLink", ""]],
      hostAttrs: [1, "mat-tab-link", "mat-focus-indicator"],
      hostVars: 7,
      hostBindings: function MatTabLink_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-current", ctx.active ? "page" : null)("aria-disabled", ctx.disabled)("tabIndex", ctx.tabIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-tab-disabled", ctx.disabled)("mat-tab-label-active", ctx.active);
        }
      },
      inputs: {
        disabled: "disabled",
        disableRipple: "disableRipple",
        tabIndex: "tabIndex"
      },
      exportAs: ["matTabLink"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    MatTabLink.ctorParameters = function () {
      return [{
        type: MatTabNav
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabLink, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
          selector: '[mat-tab-link], [matTabLink]',
          exportAs: 'matTabLink',
          inputs: ['disabled', 'disableRipple', 'tabIndex'],
          host: {
            'class': 'mat-tab-link mat-focus-indicator',
            '[attr.aria-current]': 'active ? "page" : null',
            '[attr.aria-disabled]': 'disabled',
            '[attr.tabIndex]': 'tabIndex',
            '[class.mat-tab-disabled]': 'disabled',
            '[class.mat-tab-label-active]': 'active'
          }
        }]
      }], function () {
        return [{
          type: MatTabNav
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
            args: ['tabindex']
          }]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tabs-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatTabsModule = function MatTabsModule() {
      _classCallCheck(this, MatTabsModule);
    };

    MatTabsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: MatTabsModule
    });
    MatTabsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      factory: function MatTabsModule_Factory(t) {
        return new (t || MatTabsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["ObserversModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MatTabsModule, {
        declarations: function declarations() {
          return [MatTabGroup, MatTabLabel, MatTab, MatInkBar, MatTabLabelWrapper, MatTabNav, MatTabLink, MatTabBody, MatTabBodyPortal, MatTabHeader, MatTabContent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["ObserversModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"]];
        },
        exports: function exports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatTabGroup, MatTabLabel, MatTab, MatTabNav, MatTabLink, MatTabContent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatTabsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_1__["ObserversModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"]],
          // Don't export all components because some are only to be used internally.
          exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatTabGroup, MatTabLabel, MatTab, MatTabNav, MatTabLink, MatTabContent],
          declarations: [MatTabGroup, MatTabLabel, MatTab, MatInkBar, MatTabLabelWrapper, MatTabNav, MatTabLink, MatTabBody, MatTabBodyPortal, MatTabHeader, MatTabContent]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/tab-nav-bar/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tabs/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=tabs.js.map

    /***/

  },

  /***/
  "./src/app/login/credentials/credentials.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/login/credentials/credentials.component.ts ***!
    \************************************************************/

  /*! exports provided: CredentialsComponent */

  /***/
  function srcAppLoginCredentialsCredentialsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CredentialsComponent", function () {
      return CredentialsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/login"];
    };

    var _c1 = function _c1() {
      return ["/signup"];
    };

    var CredentialsComponent = /*#__PURE__*/function () {
      function CredentialsComponent() {
        _classCallCheck(this, CredentialsComponent);
      }

      _createClass(CredentialsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CredentialsComponent;
    }();

    CredentialsComponent.ɵfac = function CredentialsComponent_Factory(t) {
      return new (t || CredentialsComponent)();
    };

    CredentialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CredentialsComponent,
      selectors: [["app-credentials"]],
      decls: 13,
      vars: 6,
      consts: [[1, "background"], ["mat-tab-nav-bar", "", "color", "accent"], ["mat-tab-link", "", "routerLinkActive", "", 3, "active", "routerLink"], ["rla", "routerLinkActive"], ["rlaSignup", "routerLinkActive"]],
      template: function CredentialsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Scheduler");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ENTRAR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "QUERO ME CADASTRAR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", _r0.isActive)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", _r1.isActive)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabNav"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["[_nghost-%COMP%]   .background[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   .background[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   .mat-tab-nav-bar[_ngcontent-%COMP%] {\n  margin: 0 -16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JydWNlL2Rpc2svcmVwb3Mvc2NoZWR1bGVyL2NsaWVudC9zcmMvYXBwL2xvZ2luL2NyZWRlbnRpYWxzL2NyZWRlbnRpYWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9jcmVkZW50aWFscy9jcmVkZW50aWFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQUo7QURHTTtFQUNFLGVBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2NyZWRlbnRpYWxzL2NyZWRlbnRpYWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuYmFja2dyb3VuZCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5tYXQtY2FyZCB7XG4gICAgICAubWF0LXRhYi1uYXYtYmFyIHtcbiAgICAgICAgbWFyZ2luOiAwIC0xNnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3QgLmJhY2tncm91bmQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IC5iYWNrZ3JvdW5kIC5tYXQtY2FyZCAubWF0LXRhYi1uYXYtYmFyIHtcbiAgbWFyZ2luOiAwIC0xNnB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CredentialsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-credentials',
          templateUrl: './credentials.component.html',
          styleUrls: ['./credentials.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function () {
      return LoginRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/login/signup/signup.component.ts");
    /* harmony import */


    var _credentials_credentials_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./credentials/credentials.component */
    "./src/app/login/credentials/credentials.component.ts");

    var routes = [{
      path: '',
      component: _credentials_credentials_component__WEBPACK_IMPORTED_MODULE_4__["CredentialsComponent"],
      children: [{
        path: 'login',
        component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }, {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
      }, {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      }]
    }];

    var LoginRoutingModule = function LoginRoutingModule() {
      _classCallCheck(this, LoginRoutingModule);
    };

    LoginRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LoginRoutingModule
    });
    LoginRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LoginRoutingModule_Factory(t) {
        return new (t || LoginRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    function LoginComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 9);
      }
    }

    function LoginComponent_mat_error_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Utilize um email v\xE1lido.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(snackBar, auth, fb) {
        _classCallCheck(this, LoginComponent);

        this.snackBar = snackBar;
        this.auth = auth;
        this.fb = fb;
        this.togglePasswordIcon = 'visibility';
        this.passwordType = 'password';
        this.isLoading = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.buildForm();
        }
      }, {
        key: "togglePasswordVisibility",
        value: function togglePasswordVisibility(buttonToggle) {
          this.passwordType = buttonToggle.checked ? 'text' : 'password';
          this.togglePasswordIcon = buttonToggle.checked ? 'visibility' : 'visibility_off';
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this26 = this;

          if (this.loginFormGroup.valid) {
            this.isLoading = true;

            var _this$loginFormGroup$ = this.loginFormGroup.getRawValue(),
                username = _this$loginFormGroup$.username,
                password = _this$loginFormGroup$.password;

            this.auth.login(username, password).toPromise().then(function (_) {
              return _this26.auth.redirectAfterLogin();
            })["catch"](function (error) {
              _this26.snackBar.open('Não foi possível ingressar com as credenciais informadas, verifique o dados e tente novamente!', null, {
                duration: 4000
              });
            })["finally"](function () {
              return _this26.isLoading = false;
            });
          }
        }
      }, {
        key: "buildForm",
        value: function buildForm() {
          this.loginFormGroup = this.fb.group({
            username: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          });
        }
      }, {
        key: "email",
        get: function get() {
          return this.loginFormGroup.get('username');
        }
      }, {
        key: "password",
        get: function get() {
          return this.loginFormGroup.get('password');
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 23,
      vars: 5,
      consts: [[3, "formGroup", "ngSubmit"], [3, "ngIf"], ["matPrefix", ""], ["formControlName", "username", "matInput", "", "placeholder", "meuemail@example.com"], [4, "ngIf"], ["formControlName", "password", "matInput", "", "placeholder", "senhasupersecreta", 3, "type"], ["matSuffix", "", 3, "click"], ["buttonToggle", "matButtonToggle"], ["mat-raised-button", "", "color", "primary", 1, "signin"], ["mode", "query"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_ng_template_1_Template, 1, 0, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "E-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "person");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_mat_error_9_Template, 2, 0, "mat-error", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Senha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "lock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-button-toggle", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_mat_button_toggle_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

            return ctx.togglePasswordVisibility(_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Entrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.passwordType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.togglePasswordIcon);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatPrefix"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBar"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]],
      styles: ["[_nghost-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 16px 0;\n}\n[_nghost-%COMP%]   .mat-raised-button.signin[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JydWNlL2Rpc2svcmVwb3Mvc2NoZWR1bGVyL2NsaWVudC9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FDRko7QURLRTtFQUNFLFdBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXG5cbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDE2cHggMDtcbiAgfVxuXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbi5zaWduaW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iLCI6aG9zdCAubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxNnB4IDA7XG59XG46aG9zdCAubWF0LXJhaXNlZC1idXR0b24uc2lnbmluIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return LoginModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _signup_signup_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup/signup.module */
    "./src/app/login/signup/signup.module.ts");
    /* harmony import */


    var _credentials_credentials_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./credentials/credentials.component */
    "./src/app/login/credentials/credentials.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var LoginModule = function LoginModule() {
      _classCallCheck(this, LoginModule);
    };

    LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LoginModule
    });
    LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LoginModule_Factory(t) {
        return new (t || LoginModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _signup_signup_module__WEBPACK_IMPORTED_MODULE_6__["SignupModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, {
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _credentials_credentials_component__WEBPACK_IMPORTED_MODULE_7__["CredentialsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _signup_signup_module__WEBPACK_IMPORTED_MODULE_6__["SignupModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _signup_signup_module__WEBPACK_IMPORTED_MODULE_6__["SignupModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"]],
          declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _credentials_credentials_component__WEBPACK_IMPORTED_MODULE_7__["CredentialsComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/signup/signup.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/login/signup/signup.component.ts ***!
    \**************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppLoginSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    function SignupComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 8);
      }
    }

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(fb, snackBar, http, auth) {
        _classCallCheck(this, SignupComponent);

        this.fb = fb;
        this.snackBar = snackBar;
        this.http = http;
        this.auth = auth;
        this.togglePasswordIcon = 'visibility';
        this.passwordType = 'password';
        this.isLoading = false;
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.buildForm();
        }
      }, {
        key: "buildForm",
        value: function buildForm() {
          this.customerFormGroup = this.fb.group({
            name: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            healthInsurance: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/.{5,}/)])
          });
        }
      }, {
        key: "createUserAccount",
        value: function createUserAccount() {
          var _this27 = this;

          if (this.customerFormGroup.invalid) {
            this.snackBar.open('Verifique se o formulario esta preenchido corretamente e tente novamente!', null, {
              duration: 10000
            });
          }

          if (this.customerFormGroup.valid) {
            this.isLoading = true;
            var customer = this.customerFormGroup.getRawValue();
            this.http.post('http://localhost:8080/signup', customer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_) {
              return _this27.auth.login(customer.email, customer.password);
            })).toPromise().then(function (_) {
              return _this27.auth.redirectAfterLogin();
            })["finally"](function () {
              return _this27.isLoading = false;
            });
          }
        }
      }, {
        key: "togglePasswordVisibility",
        value: function togglePasswordVisibility(buttonToggle) {
          this.passwordType = buttonToggle.checked ? 'text' : 'password';
          this.togglePasswordIcon = buttonToggle.checked ? 'visibility_off' : 'visibility';
          console.log('PASSWORD VISIBILITY ', buttonToggle.checked);
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 36,
      vars: 3,
      consts: [[3, "formGroup", "ngSubmit"], ["matInput", "", "formControlName", "name", "type", "text"], ["matInput", "", "formControlName", "healthInsurance", "type", "text"], ["matInput", "", "formControlName", "email", "type", "email"], ["formControlName", "password", "matInput", "", "placeholder", "senhasupersecreta", 3, "type"], ["matSuffix", "", 3, "click"], ["buttonToggle", "matButtonToggle"], ["type", "submit", "mat-raised-button", "", "color", "primary"], ["color", "primary", "mode", "indeterminate"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_0_listener() {
            return ctx.createUserAccount();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_ng_template_1_Template, 1, 0, "ng-template");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Informe seu nome completo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Plano de Sa\xFAde");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Informe seu plano de sa\xFAde.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "E-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Informe um e-mail ativo, para receber notifica\xE7\xF5es.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Senha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-button-toggle", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_mat_button_toggle_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

            return ctx.togglePasswordVisibility(_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Informe uma senha com pelo menos 5 caracteres.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Criar conta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.customerFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.passwordType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.togglePasswordIcon);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBar"]],
      styles: ["[_nghost-%COMP%]   .mat-form-field[_ngcontent-%COMP%], [_nghost-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 16px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JydWNlL2Rpc2svcmVwb3Mvc2NoZWR1bGVyL2NsaWVudC9zcmMvYXBwL2xvZ2luL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLm1hdC1mb3JtLWZpZWxkLCAubWF0LXJhaXNlZC1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMTZweCAwO1xuICB9XG59XG4iLCI6aG9zdCAubWF0LWZvcm0tZmllbGQsIDpob3N0IC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDE2cHggMDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/signup/signup.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/signup/signup.module.ts ***!
    \***********************************************/

  /*! exports provided: SignupModule */

  /***/
  function srcAppLoginSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupModule", function () {
      return SignupModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./signup.component */
    "./src/app/login/signup/signup.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var SignupModule = function SignupModule() {
      _classCallCheck(this, SignupModule);
    };

    SignupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SignupModule
    });
    SignupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SignupModule_Factory(t) {
        return new (t || SignupModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SignupModule, {
        declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]],
        exports: [_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]],
          exports: [_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map