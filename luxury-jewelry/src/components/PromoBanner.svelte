<script>
    let countdown = 24 * 60 * 60; // 24 hours in seconds
    
    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    
    const interval = setInterval(() => {
        countdown -= 1;
        if (countdown <= 0) clearInterval(interval);
    }, 1000);
    
    onDestroy(() => clearInterval(interval));
</script>

<section class="bg-gradient-to-r from-gold-500 to-gold-600 py-8 px-4">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div class="text-center md:text-left mb-4 md:mb-0">
            <h3 class="text-2xl font-bold text-white">Summer Sale</h3>
            <p class="text-white">Limited time offer</p>
        </div>
        
        <div class="flex items-center space-x-4">
            <div class="text-center">
                <div class="bg-black bg-opacity-20 text-white rounded-lg px-4 py-2">
                    <span class="text-xl font-bold">{formatTime(countdown)}</span>
                </div>
                <p class="text-xs text-white mt-1">Time Remaining</p>
            </div>
            
            <button class="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200">
                Shop Now
            </button>
        </div>
    </div>
</section>

<style>
    .bg-gold-500 { background-color: #d4af37; }
    .bg-gold-600 { background-color: #b8973a; }
</style>