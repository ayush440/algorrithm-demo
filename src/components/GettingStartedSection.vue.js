import { UserCircle, Wallet, Handshake, LineChart, ArrowRight } from 'lucide-vue-next';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const steps = [
    {
        title: "Get started",
        description: "Initiate by signing up or logging in your account",
        icon: UserCircle
    },
    {
        title: "Select a plan",
        description: "Pick the right subscription plan for yourself",
        icon: Wallet
    },
    {
        title: "Add a broker",
        description: "Add a suitable broker to your account or open a demat account",
        icon: Handshake
    },
    {
        title: "Select strategy",
        description: "Choose a strategy that fits your investment size and risk tolerance.",
        icon: LineChart
    },
    {
        title: "Start trading",
        description: "Ready set start trading with a click of a button",
        icon: ArrowRight
    }
]; /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("w-full py-20") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-[1271px] mx-auto px-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center mb-[60px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-[40px] font-bold mb-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-[#2F5741]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-[#FFB800]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-[#666666] text-lg max-w-[900px] mx-auto leading-[27px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-wrap justify-between items-start gap-8") }, });
    for (const [step, index] of __VLS_getVForSourceType((__VLS_ctx.steps))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), ...{ class: ("flex-1 min-w-[200px]") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col items-center text-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-[96px] h-[96px] bg-[#F8F8F8] rounded-full flex items-center justify-center mb-6") }, });
        const __VLS_0 = ((step.icon));
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("w-12 h-12 text-[#2F5741]") }, }));
        const __VLS_2 = __VLS_1({ ...{ class: ("w-12 h-12 text-[#2F5741]") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-[#2F5741] text-[20px] font-semibold mb-3") }, });
        (step.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-[#666666] text-[16px] leading-[24px] max-w-[200px]") }, });
        (step.description);
    }
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['py-20'];
    __VLS_styleScopedClasses['max-w-[1271px]'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['px-6'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mb-[60px]'];
    __VLS_styleScopedClasses['text-[40px]'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['text-[#2F5741]'];
    __VLS_styleScopedClasses['text-[#FFB800]'];
    __VLS_styleScopedClasses['text-[#666666]'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['max-w-[900px]'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['leading-[27px]'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['justify-between'];
    __VLS_styleScopedClasses['items-start'];
    __VLS_styleScopedClasses['gap-8'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['min-w-[200px]'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['w-[96px]'];
    __VLS_styleScopedClasses['h-[96px]'];
    __VLS_styleScopedClasses['bg-[#F8F8F8]'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['w-12'];
    __VLS_styleScopedClasses['h-12'];
    __VLS_styleScopedClasses['text-[#2F5741]'];
    __VLS_styleScopedClasses['text-[#2F5741]'];
    __VLS_styleScopedClasses['text-[20px]'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['text-[#666666]'];
    __VLS_styleScopedClasses['text-[16px]'];
    __VLS_styleScopedClasses['leading-[24px]'];
    __VLS_styleScopedClasses['max-w-[200px]'];
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
            steps: steps,
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
