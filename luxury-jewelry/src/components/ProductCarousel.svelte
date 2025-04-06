<script>
    import { addToCart } from '../stores.js';
    
    const products = [
        {
            id: 1,
            name: 'Diamond Solitaire Ring',
            price: 2499,
            image: 'https://images.pexels.com/photos/3266700/pexels-photo-3266700.jpeg',
            category: 'Rings'
        },
        {
            id: 2,
            name: 'Pearl Drop Earrings',
            price: 899,
            image: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg',
            category: 'Earrings'
        },
        {
            id: 3,
            name: 'Gold Bangle Set',
            price: 1799,
            image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg',
            category: 'Bangles'
        },
        {
            id: 4,
            name: 'Sapphire Necklace',
            price: 3299,
            image: 'https://images.pexels.com/photos/3266703/pexels-photo-3266703.jpeg',
            category: 'Necklaces'
        }
    ];
    
    let currentIndex = 0;
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % products.length;
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + products.length) % products.length;
    }
</script>

<section class="py-16 bg-beige-50">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Our Featured Collection</h2>
        
        <div class="relative overflow-hidden">
            <div class="flex transition-transform duration-500" style={`transform: translateX(-${currentIndex * 100}%)`}>
                {#each products as product (product.id)}
                    <div class="w-full flex-shrink-0 px-4">
                        <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                            <div class="relative overflow-hidden h-64">
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-semibold mb-2">{product.name}</h3>
                                <p class="text-gold-600 font-bold mb-4">${product.price.toLocaleString()}</p>
                                <button 
                                    on:click={() => addToCart(product)}
                                    class="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors duration-200"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
            
            <button 
                on:click={prevSlide}
                class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
            >
                ❮
            </button>
            <button 
                on:click={nextSlide}
                class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
            >
                ❯
            </button>
        </div>
    </div>
</section>

<style>
    .bg-beige-50 { background-color: #faf7f2; }
    .text-gold-600 { color: #b8973a; }
</style>