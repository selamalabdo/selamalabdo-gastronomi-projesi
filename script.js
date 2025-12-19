// Tarif detaylarını göster/gizle fonksiyonu
function toggleRecipeDetails(button) {
    const recipeCard = button.closest('.recipe-card');
    recipeCard.classList.toggle('active');
}

// Sayfa yüklendiğinde çalışacak kodlar
document.addEventListener('DOMContentLoaded', function() {
    // Konsola hoşgeldin mesajı
    console.log('%c🍳 Lezzet Dünyasına Hoş Geldiniz! 🍽️', 'color: #e67e22; font-size: 16px; font-weight: bold;');
});
