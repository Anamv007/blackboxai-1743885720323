import { writable } from 'svelte/store';

// Cart store
export const cart = writable([]);
export const cartCount = writable(0);

// Function to add item to cart
export function addToCart(item) {
    cart.update(items => {
        const existingItem = items.find(i => i.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            items.push({ ...item, quantity: 1 });
        }
        return items;
    });
    cartCount.update(n => n + 1);
}

// Function to remove item from cart
export function removeFromCart(itemId) {
    cart.update(items => {
        const index = items.findIndex(i => i.id === itemId);
        if (index !== -1) {
            const item = items[index];
            if (item.quantity > 1) {
                item.quantity -= 1;
            } else {
                items.splice(index, 1);
            }
        }
        return items;
    });
    cartCount.update(n => Math.max(0, n - 1));
}