let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ • Indosat [085779150501]
│ • Gopay  [085779150501]
│ • Dana  [085779150501]
│ • Saweria  [https://saweria.co/ranggabot123]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/62857791505012
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
