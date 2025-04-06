<script>
    import { cart, cartCount, removeFromCart } from '../stores.js';
    
    let isOpen = false;
    
    function toggleCart() {
        isOpen = !isOpen;
    }
    
    function closeCart() {
        isOpen = false;
    }
    
    $: total = $cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
</script>

<div class="fixed inset-0 z-50 overflow-hidden {isOpen ? '' : 'pointer-events-none'}">
    <!-- Overlay -->
    <div 
        class="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
        class:opacity-0={!isOpen}
        class:opacity-100={isOpen}
        on:click={closeCart}
    ></div>
    
    <!-- Cart Panel -->
    <div 
        class="fixed inset-y-0 right-0 max-w-full flex transform transition-transform duration-300 ease-in-out"
        class:translate-x-0={isOpen}
        class:translate-x-full={!isOpen}
    >
        <div class="w-screen max-w-md">
            <div class="h-full flex flex-col bg-white shadow-xl">
                <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                    <div class="flex items-start justify-between">
                        <h2 class="text-lg font-medium text-gray-900">Shopping cart</h2>
                        <button 
                            on:click={closeCart}
                            class="text-gray-400 hover:text-gray-500"
                        >
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div class="mt-8">
                        <div class="flow-root">
                            <ul class="-my-6 divide-y divide-gray-200">
                                {#each $cart as item (item.id)}
                                    <li class="py-6 flex">
                                        <div class="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden">
                                            <img 
                                                src={item.image} 
                                                alt={item.name}
                                                class="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div class="ml-4 flex-1 flex flex-col">
                                            <div>
                                                <div class="flex justify-between text-base font-medium text-gray-900">
                                                    <h3>{item.name}</h3>
                                                    <p class="ml-4">${(item.price * item.quantity).toLocaleString()}</p>
                                                </div>
                                                <p class="mt-1 text-sm text-gray-500">{item.category}</p>
                                            </div>
                                            <div class="flex-1 flex items-end justify-between text-sm">
                                                <p class="text-gray-500">Qty {item.quantity}</p>

                                                <div class="flex">
                                                    <button 
                                                        on:click={() => removeFromCart(item.id)}
                                                        class="font-medium text-gold-600 hover:text-gold-500"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                {/each}
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div class="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${total.toLocaleString()}</p>
                    </div>
                    <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div class="mt-6">
                        <button 
                            class="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gold-600 hover:bg-gold-700"
                        >
                            Checkout
                        </button>
                    </div>
                    <div class="mt-6 flex justify-center text-sm text-center text-gray-500">
                        <p>
                            or{' '}
                            <button 
                                on:click={closeCart}
                                class="text-gold-600 font-medium hover:text-gold-500"
                            >
                                Continue Shopping<span aria-hidden="true"> &rarr;</span>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .bg-gold-600 { background-color: #b8973a; }
    .bg-gold-700 { background-color: #9a7d2e; }
    .text-gold-500 { color: #d4af37; }
    .text-gold-600 { color: #b8973a; }
</style>