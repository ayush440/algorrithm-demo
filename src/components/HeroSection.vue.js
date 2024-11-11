import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const navLinks = ['Why Algo', 'Features', 'Pricing', 'About Us', 'Why Us'];
const isMenuOpen = ref(false);
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
}; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full bg-[#FFFBE9]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("py-4 pl-[70px] pr-4 sm:pr-8 lg:pr-16") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-[1800px] mx-auto flex items-center justify-between") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/images/Algo.svg"), alt: ("Algorrithm Logo"), ...{ class: ("h-12 w-auto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("hidden lg:flex items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-white rounded-[50px] px-8 py-3 flex items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center gap-12 mr-6") }, });
    for (const [link] of __VLS_getVForSourceType((__VLS_ctx.navLinks))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ key: ((link)), href: ("#"), ...{ class: ("text-[#4A4A4A] hover:text-[#2F5741] text-base font-medium transition-colors duration-200") }, });
        (link);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("bg-[#2F5741] text-white px-8 py-2 rounded-full text-base font-medium hover:bg-opacity-90 transition-all duration-200") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleMenu) }, ...{ class: ("lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none") }, "aria-label": ("Toggle menu"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("w-8 h-0.5 bg-[#2F5741] transition-all duration-300") }, ...{ class: (({ 'rotate-45 translate-y-2': __VLS_ctx.isMenuOpen })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("w-8 h-0.5 bg-[#2F5741] transition-all duration-300") }, ...{ class: (({ 'opacity-0': __VLS_ctx.isMenuOpen })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("w-8 h-0.5 bg-[#2F5741] transition-all duration-300") }, ...{ class: (({ '-rotate-45 -translate-y-2': __VLS_ctx.isMenuOpen })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("lg:hidden overflow-hidden transition-all duration-300 ease-in-out") }, ...{ class: ((__VLS_ctx.isMenuOpen ? 'max-h-96' : 'max-h-0')) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-white shadow-lg mt-4 rounded-3xl px-6 py-8 space-y-6") }, });
    for (const [link] of __VLS_getVForSourceType((__VLS_ctx.navLinks))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ key: ((link)), href: ("#"), ...{ class: ("block text-[#4A4A4A] hover:text-[#2F5741] text-lg font-medium transition-colors duration-200") }, });
        (link);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("bg-[#2F5741] text-white px-6 py-2 rounded-full text-base font-medium hover:bg-opacity-90 transition-all duration-200 w-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-[1800px] mx-auto pl-[70px] pr-4 sm:pr-8 lg:pr-16 pb-24 pt-16") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col lg:flex-row items-start justify-between") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full lg:w-[45%] flex flex-col items-start") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-[64px] leading-[1.1] font-bold mb-8 mt-24") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-[#2D2D2D] inline-block") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-[#2F5741] ml-2 ") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-[#2D2D2D] ml-2 ") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-[#2D2D2D] ") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-[#666666] text-xl leading-relaxed mb-12 max-w-[620px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("bg-[#2F5741] text-white px-10 py-4 rounded-full text-xl font-medium hover:bg-opacity-90 transition-all duration-300") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full lg:w-[60%] flex items-center justify-end mt-12 lg:mt-0 transform translate-x-4 translate-y-32") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/images/image2.png"), alt: ("Trading Platform Interface"), ...{ class: ("w-[120%] h-auto object-contain transform translate-x-[10%] translate-y-[-5%]") }, });
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['bg-[#FFFBE9]'];
    __VLS_styleScopedClasses['py-4'];
    __VLS_styleScopedClasses['pl-[70px]'];
    __VLS_styleScopedClasses['pr-4'];
    __VLS_styleScopedClasses['sm:pr-8'];
    __VLS_styleScopedClasses['lg:pr-16'];
    __VLS_styleScopedClasses['max-w-[1800px]'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['h-12'];
    __VLS_styleScopedClasses['w-auto'];
    __VLS_styleScopedClasses['hidden'];
    __VLS_styleScopedClasses['lg:flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['rounded-[50px]'];
    __VLS_styleScopedClasses['px-8'];
    __VLS_styleScopedClasses['py-3'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['gap-12'];
    __VLS_styleScopedClasses['mr-6'];
    __VLS_styleScopedClasses['text-[#4A4A4A]'];
    __VLS_styleScopedClasses['hover:text-[#2F5741]'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['transition-colors'];
    __VLS_styleScopedClasses['duration-200'];
    __VLS_styleScopedClasses['bg-[#2F5741]'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['px-8'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['hover:bg-opacity-90'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-200'];
    __VLS_styleScopedClasses['lg:hidden'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['w-10'];
    __VLS_styleScopedClasses['h-10'];
    __VLS_styleScopedClasses['space-y-1.5'];
    __VLS_styleScopedClasses['focus:outline-none'];
    __VLS_styleScopedClasses['w-8'];
    __VLS_styleScopedClasses['h-0.5'];
    __VLS_styleScopedClasses['bg-[#2F5741]'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['rotate-45'];
    __VLS_styleScopedClasses['translate-y-2'];
    __VLS_styleScopedClasses['w-8'];
    __VLS_styleScopedClasses['h-0.5'];
    __VLS_styleScopedClasses['bg-[#2F5741]'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['opacity-0'];
    __VLS_styleScopedClasses['w-8'];
    __VLS_styleScopedClasses['h-0.5'];
    __VLS_styleScopedClasses['bg-[#2F5741]'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['-rotate-45'];
    __VLS_styleScopedClasses['-translate-y-2'];
    __VLS_styleScopedClasses['lg:hidden'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['ease-in-out'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['shadow-lg'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['rounded-3xl'];
    __VLS_styleScopedClasses['px-6'];
    __VLS_styleScopedClasses['py-8'];
    __VLS_styleScopedClasses['space-y-6'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-[#4A4A4A]'];
    __VLS_styleScopedClasses['hover:text-[#2F5741]'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['transition-colors'];
    __VLS_styleScopedClasses['duration-200'];
    __VLS_styleScopedClasses['bg-[#2F5741]'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['px-6'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['text-base'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['hover:bg-opacity-90'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-200'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['max-w-[1800px]'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['pl-[70px]'];
    __VLS_styleScopedClasses['pr-4'];
    __VLS_styleScopedClasses['sm:pr-8'];
    __VLS_styleScopedClasses['lg:pr-16'];
    __VLS_styleScopedClasses['pb-24'];
    __VLS_styleScopedClasses['pt-16'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['lg:flex-row'];
    __VLS_styleScopedClasses['items-start'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['lg:w-[45%]'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['items-start'];
    __VLS_styleScopedClasses['text-[64px]'];
    __VLS_styleScopedClasses['leading-[1.1]'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-8'];
    __VLS_styleScopedClasses['mt-24'];
    __VLS_styleScopedClasses['text-[#2D2D2D]'];
    __VLS_styleScopedClasses['inline-block'];
    __VLS_styleScopedClasses['text-[#2F5741]'];
    __VLS_styleScopedClasses['ml-2'];
    __VLS_styleScopedClasses['text-[#2D2D2D]'];
    __VLS_styleScopedClasses['ml-2'];
    __VLS_styleScopedClasses['text-[#2D2D2D]'];
    __VLS_styleScopedClasses['text-[#666666]'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['leading-relaxed'];
    __VLS_styleScopedClasses['mb-12'];
    __VLS_styleScopedClasses['max-w-[620px]'];
    __VLS_styleScopedClasses['bg-[#2F5741]'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['px-10'];
    __VLS_styleScopedClasses['py-4'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-medium'];
    __VLS_styleScopedClasses['hover:bg-opacity-90'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['lg:w-[60%]'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-end'];
    __VLS_styleScopedClasses['mt-12'];
    __VLS_styleScopedClasses['lg:mt-0'];
    __VLS_styleScopedClasses['transform'];
    __VLS_styleScopedClasses['translate-x-4'];
    __VLS_styleScopedClasses['translate-y-32'];
    __VLS_styleScopedClasses['w-[120%]'];
    __VLS_styleScopedClasses['h-auto'];
    __VLS_styleScopedClasses['object-contain'];
    __VLS_styleScopedClasses['transform'];
    __VLS_styleScopedClasses['translate-x-[10%]'];
    __VLS_styleScopedClasses['translate-y-[-5%]'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            navLinks: navLinks,
            isMenuOpen: isMenuOpen,
            toggleMenu: toggleMenu,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
