/*! vue-bootstrap-esm-async
 * +v MIT
 */
const components = {
    Alert: {
        bAlert: () => import(/* webpackChunkName: "vue-bootstrap-alert" */ 'bootstrap-vue/es/components/alert/alert')
    },
    Badge: {
        bBadge: () => import(/* webpackChunkName: "vue-bootstrap-badge" */ 'bootstrap-vue/es/components/badge/badge')
    },
    Breadcrumb: {
        bBreadcrumb: () => import(/* webpackChunkName: "vue-bootstrap-breadcrumb" */ 'bootstrap-vue/es/components/Breadcrumb/breadcrumb'),
        bBreadcrumbItem: () => import(/* webpackChunkName: "vue-bootstrap-breadcrumb" */ 'bootstrap-vue/es/components/Breadcrumb/breadcrumb-item'),
        bBreadcrumbLink: () => import(/* webpackChunkName: "vue-bootstrap-breadcrumb" */ 'bootstrap-vue/es/components/Breadcrumb/breadcrumb-link')
    },
    Button: {
        bButton: () => import(/* webpackChunkName: "vue-bootstrap-button" */ 'bootstrap-vue/es/components/button/button'),
        bBtn: () => import(/* webpackChunkName: "vue-bootstrap-button" */ 'bootstrap-vue/es/components/button/button'),
        bButtonClose: () => import(/* webpackChunkName: "vue-bootstrap-button" */ 'bootstrap-vue/es/components/button/button-close'),
        bBtnClose: () => import(/* webpackChunkName: "vue-bootstrap-button" */ 'bootstrap-vue/es/components/button/button-close')
    },
    ButtonGroup: {
        bButtonGroup: () => import(/* webpackChunkName: "vue-bootstrap-buttonGroup" */ 'bootstrap-vue/es/components/button-group/button-group'),
        bBtnGroup: () => import(/* webpackChunkName: "vue-bootstrap-buttonGroup" */ 'bootstrap-vue/es/components/button-group/button-group')
    },
    ButtonToolbar: {
        bButtonToolbar: () => import(/* webpackChunkName: "vue-bootstrap-buttonToolbar" */ 'bootstrap-vue/es/components/button-toolbar/button-toolbar'),
        bBtnToolbar: () => import(/* webpackChunkName: "vue-bootstrap-buttonToolbar" */ 'bootstrap-vue/es/components/button-toolbar/button-toolbar')
    },
    Card: {
        bCard: () => import(/* webpackChunkName: "vue-bootstrap-card" */ 'bootstrap-vue/es/components/card/card'),
        bCardHeader: () => import(/* webpackChunkName: "vue-bootstrap-card" */ 'bootstrap-vue/es/components/card/card-header'),
        bCardBody: () => import(/* webpackChunkName: "vue-bootstrap-card" */ 'bootstrap-vue/es/components/card/card-body'),
        bCardFooter: () => import(/* webpackChunkName: "vue-bootstrap-card" */ 'bootstrap-vue/es/components/card/card-footer'),
        bCardImg: () => import(/* webpackChunkName: "vue-bootstrap-card" */ 'bootstrap-vue/es/components/card/card-img'),
        bCardGroup: () => import(/* webpackChunkName: "vue-bootstrap-card" */ 'bootstrap-vue/es/components/card/card-group')
    },
    Carousel: {
        bCarousel: () => import(/* webpackChunkName: "vue-bootstrap-carousel" */ 'bootstrap-vue/es/components/carousel/carousel'),
        bCarouselSlide: () => import(/* webpackChunkName: "vue-bootstrap-carousel" */ 'bootstrap-vue/es/components/carousel/carousel-slide')
    },
    Collapse: {
        bCollapse: () => import(/* webpackChunkName: "vue-bootstrap-collapse" */ 'bootstrap-vue/es/components/collapse/collapse'),
        use: {
            togglePlugin: () => import(/* webpackChunkName: "vue-bootstrap-toggle" */ 'bootstrap-vue/es/directives/toggle')
        }
    },
    Dropdown: {
        bDropdown: () => import(/* webpackChunkName: "vue-bootstrap-dropdown" */ 'bootstrap-vue/es/components/dropdown/dropdown'),
        bDd: () => import(/* webpackChunkName: "vue-bootstrap-dropdown" */ 'bootstrap-vue/es/components/dropdown/dropdown'),
        bDropdownItem: () => import(/* webpackChunkName: "vue-bootstrap-dropdown" */ 'bootstrap-vue/es/components/dropdown/dropdown-item'),
        bDdItem: () => import(/* webpackChunkName: "vue-bootstrap-dropdown" */ 'bootstrap-vue/es/components/dropdown/dropdown-item'),
        bDropdownItemButton: () => import(/* webpackChunkName: "vue-bootstrap-dropdown" */ 'bootstrap-vue/es/components/dropdown/dropdown-item-button'),
        bDropdownItemBtn: () => import(/* webpackChunkName: "vue-bootstrap-dropdown" */ 'bootstrap-vue/es/components/dropdown/dropdown-item-button'),
        bDdItemButton: () => import(/* webpackChunkName: "vue-bootstrap-dropdown" */ 'bootstrap-vue/es/components/dropdown/dropdown-item-button'),
        bDdItemBtn: () => import(/* webpackChunkName: "vue-bootstrap-dropdown" */ 'bootstrap-vue/es/components/dropdown/dropdown-item-button'),
        bDropdownHeader: () => import(/* webpackChunkName: "vue-bootstrap-dropdown" */ 'bootstrap-vue/es/components/dropdown/dropdown-header'),
        bDdHeader: () => import(/* webpackChunkName: "vue-bootstrap-dropdown" */ 'bootstrap-vue/es/components/dropdown/dropdown-header'),
        bDropdownDivider: () => import(/* webpackChunkName: "vue-bootstrap-dropdown" */ 'bootstrap-vue/es/components/dropdown/dropdown-divider'),
        bDdDivider: () => import(/* webpackChunkName: "vue-bootstrap-dropdown" */ 'bootstrap-vue/es/components/dropdown/dropdown-divider')
    },
    Embed: {
        bEmbed: () => import(/* webpackChunkName: "vue-bootstrap-embed" */ 'bootstrap-vue/es/components/embed/embed')
    },
    Form: {
        bForm: () => import(/* webpackChunkName: "vue-bootstrap-form" */ 'bootstrap-vue/es/components/form/form'),
        bFormRow: () => import(/* webpackChunkName: "vue-bootstrap-form" */ 'bootstrap-vue/es/components/form/form-row'),
        bFormText: () => import(/* webpackChunkName: "vue-bootstrap-form" */ 'bootstrap-vue/es/components/form/form-text'),
        bFormInvalidFeedback: () => import(/* webpackChunkName: "vue-bootstrap-form" */ 'bootstrap-vue/es/components/form/form-invalid-feedback'),
        bFormFeedback: () => import(/* webpackChunkName: "vue-bootstrap-form" */ 'bootstrap-vue/es/components/form/form-invalid-feedback'),
        bFormValidFeedback: () => import(/* webpackChunkName: "vue-bootstrap-form" */ 'bootstrap-vue/es/components/form/form-valid-feedback')
    },
    FormGroup: {
        bFormGroup: () => import(/* webpackChunkName: "vue-bootstrap-formGroup" */ 'bootstrap-vue/es/components/form-group/form-group'),
        bFormFieldset: () => import(/* webpackChunkName: "vue-bootstrap-formGroup" */ 'bootstrap-vue/es/components/form-group/form-group')
    },
    FormInput: {
        bFormInput: () => import(/* webpackChunkName: "vue-bootstrap-formInput" */ 'bootstrap-vue/es/components/form-input/form-input'),
        bInput: () => import(/* webpackChunkName: "vue-bootstrap-esm-formInput" */ 'bootstrap-vue/es/components/form-input/form-input')
    },
    FormTextarea: {
        bFormTextarea: () => import(/* webpackChunkName: "vue-bootstrap-formTextarea" */ 'bootstrap-vue/es/components/form-textarea/form-textarea'),
        bTextarea: () => import(/* webpackChunkName: "vue-bootstrap-formTextarea" */ 'bootstrap-vue/es/components/form-textarea/form-textarea')
    },
    FormFile: {
        bFormFile: () => import(/* webpackChunkName: "vue-bootstrap-formFile" */ 'bootstrap-vue/es/components/form-file/form-file'),
        bFile: () => import(/* webpackChunkName: "vue-bootstrap-formFile" */ 'bootstrap-vue/es/components/form-file/form-file')
    },
    FormCheckbox: {
        bFormCheckbox: () => import(/* webpackChunkName: "vue-bootstrap-formCheckbox" */ 'bootstrap-vue/es/components/form-checkbox/form-checkbox'),
        bCheckbox: () => import(/* webpackChunkName: "vue-bootstrap-formCheckbox" */ 'bootstrap-vue/es/components/form-checkbox/form-checkbox'),
        bCheck: () => import(/* webpackChunkName: "vue-bootstrap-formCheckbox" */ 'bootstrap-vue/es/components/form-checkbox/form-checkbox'),
        bFormCheckboxGroup: () => import(/* webpackChunkName: "vue-bootstrap-formCheckbox" */ 'bootstrap-vue/es/components/form-checkbox/form-checkbox-group'),
        bCheckboxGroup: () => import(/* webpackChunkName: "vue-bootstrap-formCheckbox" */ 'bootstrap-vue/es/components/form-checkbox/form-checkbox-group'),
        bCheckGroup: () => import(/* webpackChunkName: "vue-bootstrap-formCheckbox" */ 'bootstrap-vue/es/components/form-checkbox/form-checkbox-group')
    },
    FormRadio: {
        bFormRadio: () => import(/* webpackChunkName: "vue-bootstrap-formRadio" */ 'bootstrap-vue/es/components/form-radio/form-radio'),
        bRadio: () => import(/* webpackChunkName: "vue-bootstrap-formRadio" */ 'bootstrap-vue/es/components/form-radio/form-radio'),
        bFormRadioGroup: () => import(/* webpackChunkName: "vue-bootstrap-formRadio" */ 'bootstrap-vue/es/components/form-radio/form-radio'),
        bRadioGroup: () => import(/* webpackChunkName: "vue-bootstrap-formRadio" */ 'bootstrap-vue/es/components/form-radio/form-radio-group')
    },
    FormSelect: {
        bFormSelect: () => import(/* webpackChunkName: "vue-bootstrap-formSelect" */ 'bootstrap-vue/es/components/form-select/form-select'),
        bSelect: () => import(/* webpackChunkName: "vue-bootstrap-formSelect" */ 'bootstrap-vue/es/components/form-select/form-select')
    },
    InputGroup: {
        bInputGroup: () => import(/* webpackChunkName: "vue-bootstrap-inputGroup" */ 'bootstrap-vue/es/components/input-group/input-group'),
        bInputGroupAddon: () => import(/* webpackChunkName: "vue-bootstrap-inputGroup" */ 'bootstrap-vue/es/components/input-group/input-group-addon'),
        bInputGroupPrepend: () => import(/* webpackChunkName: "vue-bootstrap-inputGroup" */ 'bootstrap-vue/es/components/input-group/input-group-prepend'),
        bInputGroupAppend: () => import(/* webpackChunkName: "vue-bootstrap-inputGroup" */ 'bootstrap-vue/es/components/input-group/input-group-append'),
        bInputGroupText: () => import(/* webpackChunkName: "vue-bootstrap-inputGroup" */ 'bootstrap-vue/es/components/input-group/input-group-text')
    },
    Jumbotron: {
        bJumbotron: () => import(/* webpackChunkName: "vue-bootstrap-jumbotron" */ 'bootstrap-vue/es/components/jumbotron/jumbotron')
    },
    Image: {
        bImg: () => import(/* webpackChunkName: "vue-bootstrap-image" */ 'bootstrap-vue/es/components/image/img'),
        bImgLazy: () => import(/* webpackChunkName: "vue-bootstrap-image" */ 'bootstrap-vue/es/components/image/img-lazy')
    },
    Link: {
        bLink: () => import(/* webpackChunkName: "vue-bootstrap-link" */ 'bootstrap-vue/es/components/link/link')
    },
    ListGroup: {
        bListGroup: () => import(/* webpackChunkName: "vue-bootstrap-listGroup" */ 'bootstrap-vue/es/components/list-group/list-group'),
        bListGroupItem: () => import(/* webpackChunkName: "vue-bootstrap-listGroup" */ 'bootstrap-vue/es/components/list-group/list-group-item')
    },
    Media: {
        bMedia: () => import(/* webpackChunkName: "vue-bootstrap-media" */ 'bootstrap-vue/es/components/media/media'),
        bMediaAside: () => import(/* webpackChunkName: "vue-bootstrap-media" */ 'bootstrap-vue/es/components/media/media-aside'),
        bMediaBody: () => import(/* webpackChunkName: "vue-bootstrap-media" */ 'bootstrap-vue/es/components/media/media-body')
    },
    Modal: {
        bModal: () => import(/* webpackChunkName: "vue-bootstrap-modal" */ 'bootstrap-vue/es/components/modal/modal'),
        use: {
            modalPlugin: () => import(/* webpackChunkName: "vue-bootstrap-modal" */ 'bootstrap-vue/es/components/modal')
        }
    },
    Nav: {
        bNav: () => import(/* webpackChunkName: "vue-bootstrap-nav" */ 'bootstrap-vue/es/components/nav/nav'),
        bNavItem: () => import(/* webpackChunkName: "vue-bootstrap-nav" */ 'bootstrap-vue/es/components/nav/nav-item'),
        bNavText: () => import(/* webpackChunkName: "vue-bootstrap-nav" */ 'bootstrap-vue/es/components/nav/nav-text'),
        bNavForm: () => import(/* webpackChunkName: "vue-bootstrap-nav" */ 'bootstrap-vue/es/components/nav/nav-form'),
        bNavItemDropdown: () => import(/* webpackChunkName: "vue-bootstrap-nav" */ 'bootstrap-vue/es/components/nav/nav-item-dropdown'),
        bNavItemDd: () => import(/* webpackChunkName: "vue-bootstrap-nav" */ 'bootstrap-vue/es/components/nav/nav'),
        bNavDropdown: () => import(/* webpackChunkName: "vue-bootstrap-nav" */ 'bootstrap-vue/es/components/nav/nav'),
        bNavDd: () => import(/* webpackChunkName: "vue-bootstrap-nav" */ 'bootstrap-vue/es/components/nav/nav'),
        use: {
            dropdownPlugin: () => import(/* webpackChunkName: "vue-bootstrap-dropdown" */ 'bootstrap-vue/es/components/dropdown')
        }
    },
    Navbar: {
        bNavbar: () => import(/* webpackChunkName: "vue-bootstrap-navbar" */ 'bootstrap-vue/es/components/navbar/navbar'),
        bNavbarNav: () => import(/* webpackChunkName: "vue-bootstrap-navbar" */ 'bootstrap-vue/es/components/navbar/navbar-nav'),
        bNavbarBrand: () => import(/* webpackChunkName: "vue-bootstrap-navbar" */ 'bootstrap-vue/es/components/navbar/navbar-brand'),
        bNavbarToggle: () => import(/* webpackChunkName: "vue-bootstrap-navbar" */ 'bootstrap-vue/es/components/navbar/navbar-toggle'),
        bNavToggle: () => import(/* webpackChunkName: "vue-bootstrap-navbar" */ 'bootstrap-vue/es/components/navbar/navbar-toggle'),
        use: {
            collapsePlugin: () => import(/* webpackChunkName: "vue-bootstrap-collapse" */ 'bootstrap-vue/es/components/collapse'),
            dropdownPlugin: () => import(/* webpackChunkName: "vue-bootstrap-dropdown" */ 'bootstrap-vue/es/components/dropdown')
        }
    },
    Pagination: {
        bPagination: () => import(/* webpackChunkName: "vue-bootstrap-pagination" */ 'bootstrap-vue/es/components/pagination/pagination')
    },
    PaginationNav: {
        bPaginationNav: () => import(/* webpackChunkName: "vue-bootstrap-paginationNav" */ 'bootstrap-vue/es/components/pagination-nav/pagination-nav')
    },
    Popover: {
        bPopover: () => import(/* webpackChunkName: "vue-bootstrap-popover" */ 'bootstrap-vue/es/components/popover/popover')
    },
    Progress: {
        bProgress: () => import(/* webpackChunkName: "vue-bootstrap-progress" */ 'bootstrap-vue/es/components/progress/progress'),
        bProgressBar: () => import(/* webpackChunkName: "vue-bootstrap-progress" */ 'bootstrap-vue/es/components/progress/progress-bar')
    },
    Table: {
        bTable: () => import(/* webpackChunkName: "vue-bootstrap-table" */ 'bootstrap-vue/es/components/table/table')
    },
    Tabs: {
        bTabs: () => import(/* webpackChunkName: "vue-bootstrap-tabs" */ 'bootstrap-vue/es/components/tabs/tabs'),
        bTab: () => import(/* webpackChunkName: "vue-bootstrap-tabs" */ 'bootstrap-vue/es/components/tabs/tab')
    },
    Tooltip: {
        bTooltip: () => import(/* webpackChunkName: "vue-bootstrap-tooltip" */ 'bootstrap-vue/es/components/tooltip/tooltip')
    },
    Layout: {
        bContainer: () => import(/* webpackChunkName: "vue-bootstrap-layout" */ 'bootstrap-vue/es/components/layout/container'),
        bRow: () => import(/* webpackChunkName: "vue-bootstrap-layout" */ 'bootstrap-vue/es/components/layout/row'),
        bCol: () => import(/* webpackChunkName: "vue-bootstrap-layout" */ 'bootstrap-vue/es/components/layout/col'),
        bFormRow: () => import(/* webpackChunkName: "vue-bootstrap-layout" */ 'bootstrap-vue/es/components/layout/form-row')
    }
}

const directives = {
    Toggle: () => import(/* webpackChunkName: "vue-bootstrap-toggle" */ 'bootstrap-vue/es/directives/toggle'),
    Modal: () => import(/* webpackChunkName: "vue-bootstrap-modal" */ 'bootstrap-vue/es/directives/modal'),
    Scrollspy: () => import(/* webpackChunkName: "vue-bootstrap-scrollspy" */ 'bootstrap-vue/es/directives/scrollspy'),
    Tooltip: () => import(/* webpackChunkName: "vue-bootstrap-tooltip" */ 'bootstrap-vue/es/directives/tooltip'),
    Popover: () => import(/* webpackChunkName: "vue-bootstrap-popover" */ 'bootstrap-vue/es/directives/popover')
}

export default function (Vue, option) {
    // components
    for (let component in components) {
        // parent -> child
        if (!option || !option.components || option.components.indexOf(component) > -1) {
            for (let c in components[component]) {
                // component
                const _c = components[component][c]
                if (typeof _c === 'function') {
                    // install component
                    Vue.component(c, _c)
                } else if (c === 'use') {
                    // install dependencies
                    for (let u in _c) {
                        Vue.use(u)
                    }
                }
            }
        }
    }
    // directives
    for (let directive in directives) {
        if (!option || !option.components || option.directives.indexOf(directive) > -1) {
            Vue.use(directives[directive])
        }
    }
}
