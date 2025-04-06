<script>
    import { onMount } from 'svelte';
    
    let scrollPosition = 0;
    
    onMount(() => {
        window.addEventListener('scroll', () => {
            scrollPosition = window.scrollY;
        });
    });
</script>

<section 
    class="relative h-screen bg-cover bg-center bg-fixed" 
    style="background-image: url('https://images.pexels.com/photos/730541/pexels-photo-730541.jpeg');"
>
    <div 
        class="absolute inset-0 bg-black opacity-25"
        style={`transform: translateY(${scrollPosition * 0.5}px)`}
    ></div>
    
    <div 
        class="container mx-auto text-center pt-24 transform transition-transform duration-300"
        style={`transform: translateY(${scrollPosition * 0.3}px)`}
    >
        <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-8">Eternal Elegance</h1>
        <p class="text-xl text-white mb-12 max-w-2xl mx-auto">
            Discover our exquisite collection of handcrafted jewelry pieces
        </p>
        <button 
            class="bg-gradient-to-r from-gold-500 to-gold-600 px-8 py-3 text-white font-bold rounded-full 
                   hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
        >
            Shop Now
        </button>
    </div>
</section>

<style>
    .bg-gold-500 { background-color: #d4af37; }
    .bg-gold-600 { background-color: #b8973a; }
</style>