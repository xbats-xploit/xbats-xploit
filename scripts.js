function showPage(pageId) {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('contact').classList.add('hidden');
    document.getElementById(pageId).classList.remove('hidden');
}

function buyDiamond(diamondCount, price) {
    const message = `Pembelian Diamond Game%0AJumlah: ${diamondCount}%0ATotal Harga: Rp${price.toLocaleString()}`;
    window.location.href = `https://t.me/kulbat_683?text=${encodeURIComponent(message)}`;
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const contactName = document.getElementById('contactName').value;
    const contactEmail = document.getElementById('contactEmail').value;
    const messageContent = document.getElementById('messageContent').value;
    const contactMessage = document.getElementById('contactMessage');

    if (!contactName || !contactEmail || !messageContent) {
        contactMessage.textContent = 'Mohon lengkapi semua informasi.';
        return;
    }

    contactMessage.textContent = 'Pesan Anda telah dikirim!';
    
    document.getElementById('contactName').value = '';
    document.getElementById('contactEmail').value = '';
    document.getElementById('messageContent').value = '';
});

showPage('home');