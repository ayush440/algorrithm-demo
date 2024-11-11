<template>
  <section class="w-full bg-[#3A6148] py-20">
    <div class="max-w-[1702px] mx-auto px-6 md:px-[69px]">
      <!-- Free Trial Box -->
      <div class="mb-8 w-full rounded-3xl relative overflow-visible">
        <!-- Glass background -->
        <div class="absolute inset-0 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 rounded-3xl"></div>
        
        <!-- Content container -->
        <div class="flex flex-col md:flex-row h-full relative">
          <!-- Text content -->
          <div class="w-full h-[386px] md:w-[45%] p-8 md:p-12 flex flex-col items-center justify-center z-10 relative ">
    <h2 class="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
      Free Trial for
      <br><span class="text-[#FFB800] inline-block mt-1">7 Days</span>
    </h2>
    <button class="bg-[#FFB800] text-white px-6 py-2 md:px-8 md:py-3 rounded-full mt-6 hover:bg-opacity-90 transition-all duration-300">
      Try Now
    </button>
  </div>
          <!-- Image container positioned to overflow outside the div -->
          <div class="absolute top-[-60px] right-[-20px] md:block hidden z-20">
            <img 
              src="../assets/images/image6.png"
              alt="Person using phone" 
              class="w-[980px] h-auto object-cover transform translate-y-[-418px]  translate-x-20" 
            />
          </div>
        </div>
      </div>

      <!-- Two Column Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <!-- Daily Profit Box -->
        <div class="rounded-3xl overflow-hidden group relative">
          <div class="absolute inset-0 bg-white/10 backdrop-blur-md group-hover:bg-white/20 transition-all duration-300"></div>
          <div class="relative z-10 p-6 md:p-8">
            <h3 class="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
              Daily profit with perfect
              <span class="text-[#FFB800]">Risk Management</span>
            </h3>
            <img 
              src="../assets/images/image.svg"
              alt="Trading Interface" 
              class="w-full rounded-lg"
            />
          </div>
        </div>

        <!-- X2 Box -->
        <div class="rounded-3xl overflow-hidden group relative">
          <div class="absolute inset-0 bg-white/10 backdrop-blur-md group-hover:bg-white/20 transition-all duration-300"></div>
          <div class="relative z-10 p-6 md:p-8">
            <h3 class="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
              Suitable for any type of
              <br />lot you decide
            </h3>
            <img 
              src="../assets/images/image8.svg"
              alt="X2 3D Text" 
              class="w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      <!-- Clients Box -->
      <div class="mb-8 w-full rounded-3xl overflow-hidden group relative">
        <div class="absolute inset-0 bg-white/10 backdrop-blur-md group-hover:bg-white/20 transition-all duration-300"></div>
        <div class="relative z-10 p-6 md:p-12">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="mb-6 md:mb-0">
              <h2 class="text-3xl md:text-4xl font-bold">
                <span class="text-[#FFB800]">500+</span>
                <span class="text-white">Client</span>
              </h2>
              <p class="text-xl md:text-2xl text-white">Across India</p>
              <button class="bg-[#FFB800] text-white px-6 py-2 md:px-8 md:py-3 rounded-full mt-4 md:mt-6 hover:bg-opacity-90 transition-all duration-300">
                Try Now
              </button>
            </div>
            <div class="w-full md:w-1/2">
              <img 
                src="../assets/images/Untitled-1.svg" 
                alt="Client Image" 
                class="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Two Column Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Chart Box -->
        <div class="rounded-3xl overflow-hidden group relative">
          <div class="absolute inset-0 bg-white/10 backdrop-blur-md group-hover:bg-white/20 transition-all duration-300"></div>
          <div class="relative z-10 p-6 md:p-8">
            <h3 class="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
              Suitable for any type of
              <br />lot you decide
            </h3>
            <div class="relative h-48">
              <div class="absolute top-0 left-0 bg-green-500 text-white text-xs md:text-sm px-2 py-1 md:px-3 md:py-1 rounded">₹5000 Target</div>
              <div class="absolute bottom-0 left-0 bg-red-500 text-white text-xs md:text-sm px-2 py-1 md:px-3 md:py-1 rounded">₹1200 Stop Loss</div>
              <svg class="w-full h-full" viewBox="0 0 400 200">
                <path
                  d="M0,100 C100,80 200,120 400,60"
                  stroke="#22C55E"
                  stroke-width="3"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- Experience Box -->
        <div class="rounded-3xl overflow-hidden group relative">
          <div class="absolute inset-0 bg-white/10 backdrop-blur-md group-hover:bg-white/20 transition-all duration-300"></div>
          <div class="relative z-10 p-6 md:p-8">
            <h3 class="text-xl md:text-2xl font-bold mb-4 md:mb-6">
              <span class="text-[#FFB800]">5+ years</span>
              <span class="text-white">of professional</span>
              <br />
              <span class="text-white">experience</span>
            </h3>
            <img 
              src="../assets/images/image14.svg"
              alt="Golden 5" 
              class="w-36 h-36 md:w-48 md:h-48 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  font-family: 'Inter', sans-serif;
}

/* Ensure backdrop-filter works properly */
@supports (backdrop-filter: blur(12px)) {
  .backdrop-blur-md {
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
}
</style>
