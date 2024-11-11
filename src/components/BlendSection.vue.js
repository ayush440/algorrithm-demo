import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
gsap.registerPlugin(ScrollTrigger);
const sectionRef = ref(null);
const headingRef = ref(null);
const isInView = ref(false);
const hasAnimated = ref(false);
const highlightedWords = ['care,', 'reliability', 'and', 'usability'];
onMounted(() => {
    if (sectionRef.value && headingRef.value) {
        ScrollTrigger.create({
            trigger: sectionRef.value,
            start: "top 80%",
            onEnter: () => {
                if (!hasAnimated.value) {
                    isInView.value = true;
                    hasAnimated.value = true;
                    // Heading animation
                    gsap.fromTo(headingRef.value, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 2.0, ease: 'power4.out' });
                    // Background color change
                    gsap.to(sectionRef.value, {
                        backgroundColor: '#3A6148',
                        duration: 1.5,
                        ease: 'power2.inOut',
                    });
                    // Text color change for "Discover the perfect blend of"
                    gsap.to(headingRef.value.querySelector('span:first-child'), {
                        color: 'white',
                        duration: 1.5,
                        ease: 'power2.inOut',
                    });
                    // Highlighted words color transition
                    gsap.to('.highlighted-word', {
                        color: '#FFB800',
                        duration: 0.5,
                        stagger: 0.2,
                        ease: 'power2.inOut'
                    });
                }
            },
            once: true
        });
    }
});
onUnmounted(() => {
    // Clean up ScrollTrigger
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}); /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ref: ("sectionRef"), ...{ class: ("w-full py-32 relative overflow-hidden transition-colors duration-1000") }, ...{ class: (([__VLS_ctx.isInView ? 'bg-[#3A6148]' : 'bg-white'])) }, });
    // @ts-ignore navigation for `const sectionRef = ref()`
    __VLS_ctx.sectionRef;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-[1440px] mx-auto px-6 h-96 ") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("relative z-10") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ref: ("headingRef"), ...{ class: ("text-4xl md:text-5xl lg:text-7xl font-bold text-center leading-tight max-w-[1200px] mx-auto opacity-0") }, });
    // @ts-ignore navigation for `const headingRef = ref()`
    __VLS_ctx.headingRef;
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("inline-block transition-colors duration-1000") }, ...{ class: (([__VLS_ctx.isInView ? 'text-white' : 'text-[#black]'])) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({ ...{ class: ("hidden md:block") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("inline-block") }, });
    for (const [word, index] of __VLS_getVForSourceType((__VLS_ctx.highlightedWords))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ key: ((index)), ...{ class: ("inline-block transition-colors duration-1000 highlighted-word") }, ...{ class: (([__VLS_ctx.isInView ? 'text-[#FFB800]' : 'text-white'])) }, });
        (word);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute inset-0 opacity-10 transition-opacity duration-1000") }, ...{ class: (({ 'opacity-0': !__VLS_ctx.isInView })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute top-0 left-0 w-64 h-64 rounded-full  blur-3xl transform -translate-x-1/2 -translate-y-1/2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute bottom-0 right-0 w-64 h-64 rounded-full  blur-3xl transform translate-x-1/2 translate-y-1/2") }, });
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['py-32'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['transition-colors'];
    __VLS_styleScopedClasses['duration-1000'];
    __VLS_styleScopedClasses['max-w-[1440px]'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['px-6'];
    __VLS_styleScopedClasses['h-96'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['z-10'];
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['md:text-5xl'];
    __VLS_styleScopedClasses['lg:text-7xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['leading-tight'];
    __VLS_styleScopedClasses['max-w-[1200px]'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['opacity-0'];
    __VLS_styleScopedClasses['inline-block'];
    __VLS_styleScopedClasses['transition-colors'];
    __VLS_styleScopedClasses['duration-1000'];
    __VLS_styleScopedClasses['hidden'];
    __VLS_styleScopedClasses['md:block'];
    __VLS_styleScopedClasses['inline-block'];
    __VLS_styleScopedClasses['inline-block'];
    __VLS_styleScopedClasses['transition-colors'];
    __VLS_styleScopedClasses['duration-1000'];
    __VLS_styleScopedClasses['highlighted-word'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['inset-0'];
    __VLS_styleScopedClasses['opacity-10'];
    __VLS_styleScopedClasses['transition-opacity'];
    __VLS_styleScopedClasses['duration-1000'];
    __VLS_styleScopedClasses['opacity-0'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['top-0'];
    __VLS_styleScopedClasses['left-0'];
    __VLS_styleScopedClasses['w-64'];
    __VLS_styleScopedClasses['h-64'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['blur-3xl'];
    __VLS_styleScopedClasses['transform'];
    __VLS_styleScopedClasses['-translate-x-1/2'];
    __VLS_styleScopedClasses['-translate-y-1/2'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['bottom-0'];
    __VLS_styleScopedClasses['right-0'];
    __VLS_styleScopedClasses['w-64'];
    __VLS_styleScopedClasses['h-64'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['blur-3xl'];
    __VLS_styleScopedClasses['transform'];
    __VLS_styleScopedClasses['translate-x-1/2'];
    __VLS_styleScopedClasses['translate-y-1/2'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "sectionRef": __VLS_nativeElements['section'],
        "headingRef": __VLS_nativeElements['h2'],
    };
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
            sectionRef: sectionRef,
            headingRef: headingRef,
            isInView: isInView,
            highlightedWords: highlightedWords,
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
