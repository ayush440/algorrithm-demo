const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// No additional script setup required for this component
; /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("w-full bg-white py-20 font-inter") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-[1800px] mx-auto px-[43px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-[48px] text-[#2F5741] font-bold text-center mb-20") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-1 md:grid-cols-3 gap-10") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-white rounded-lg p-10 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center mb-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/images/Gainers.svg"), alt: ("Trading Platform"), ...{ class: ("w-20 h-20") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-[#2F5741] text-2xl font-semibold mb-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-[#666666] text-lg leading-relaxed") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-white rounded-lg p-10 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center mb-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/images/Support.svg"), alt: ("24/7 Support"), ...{ class: ("w-20 h-20") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-[#2F5741] text-2xl font-semibold mb-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-[#666666] text-lg leading-relaxed") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-white rounded-lg p-10 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center mb-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../assets/images/Cloud.svg"), alt: ("Effortless Trading"), ...{ class: ("w-20 h-20") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-[#2F5741] text-2xl font-semibold mb-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-[#666666] text-lg leading-relaxed") }, });
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['py-20'];
    __VLS_styleScopedClasses['font-inter'];
    __VLS_styleScopedClasses['max-w-[1800px]'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['px-[43px]'];
    __VLS_styleScopedClasses['text-[48px]'];
    __VLS_styleScopedClasses['text-[#2F5741]'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mb-20'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-1'];
    __VLS_styleScopedClasses['md:grid-cols-3'];
    __VLS_styleScopedClasses['gap-10'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['p-10'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-100'];
    __VLS_styleScopedClasses['shadow-sm'];
    __VLS_styleScopedClasses['hover:shadow-md'];
    __VLS_styleScopedClasses['transition-shadow'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['mb-8'];
    __VLS_styleScopedClasses['w-20'];
    __VLS_styleScopedClasses['h-20'];
    __VLS_styleScopedClasses['text-[#2F5741]'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['text-[#666666]'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['leading-relaxed'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['p-10'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-100'];
    __VLS_styleScopedClasses['shadow-sm'];
    __VLS_styleScopedClasses['hover:shadow-md'];
    __VLS_styleScopedClasses['transition-shadow'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['mb-8'];
    __VLS_styleScopedClasses['w-20'];
    __VLS_styleScopedClasses['h-20'];
    __VLS_styleScopedClasses['text-[#2F5741]'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['text-[#666666]'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['leading-relaxed'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['p-10'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-100'];
    __VLS_styleScopedClasses['shadow-sm'];
    __VLS_styleScopedClasses['hover:shadow-md'];
    __VLS_styleScopedClasses['transition-shadow'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['mb-8'];
    __VLS_styleScopedClasses['w-20'];
    __VLS_styleScopedClasses['h-20'];
    __VLS_styleScopedClasses['text-[#2F5741]'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['mb-5'];
    __VLS_styleScopedClasses['text-[#666666]'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['leading-relaxed'];
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
        return {};
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
