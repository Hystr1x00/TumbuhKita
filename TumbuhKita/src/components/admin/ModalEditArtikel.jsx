import React, { useState, useEffect } from "react";

export default function ModalEditArtikel({ open, onClose, artikel, onSave }) {
  const [formData, setFormData] = useState({
    judul: "",
    author: "",
    tanggal: "",
    kategori: "",
    status: "",
    dilihat: "",
    img: "",
    tags: [],
    isi: ""
  });

  useEffect(() => {
    if (artikel) {
      setFormData({
        judul: artikel.judul || "",
        author: artikel.author || "",
        tanggal: artikel.tanggal || "",
        kategori: artikel.kategori || "",
        status: artikel.status || "",
        dilihat: artikel.dilihat || "",
        img: artikel.img || "",
        tags: artikel.tags || [],
        isi: artikel.isi || ""
      });
    }
  }, [artikel]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTagsChange = (e) => {
    const tags = e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag);
    setFormData(prev => ({
      ...prev,
      tags: tags
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!open) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 backdrop-blur-sm transition-all duration-300 pt-16"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-2xl p-8 w-full max-w-4xl relative shadow-lg
        transition-all duration-300 transform animate-modal-pop max-h-[90vh] overflow-y-auto">
        {/* Tombol Close */}
        <button
          className="absolute top-4 right-4 text-2xl text-neutral-600 hover:text-black"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-extrabold mb-1">Edit Artikel</h2>
        <p className="mb-6 text-neutral-600">
          Edit informasi artikel yang terdaftar dalam sistem.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informasi Dasar */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Judul Artikel</label>
              <input
                type="text"
                name="judul"
                value={formData.judul}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Penulis</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Tanggal Publikasi</label>
              <input
                type="date"
                name="tanggal"
                value={formData.tanggal}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Kategori</label>
              <select
                name="kategori"
                value={formData.kategori}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
                required
              >
                <option value="">Pilih Kategori</option>
                <option value="Kesehatan Balita">Kesehatan Balita</option>
                <option value="Nutrisi">Nutrisi</option>
                <option value="Tumbuh Kembang">Tumbuh Kembang</option>
                <option value="Imunisasi">Imunisasi</option>
                <option value="Parenting">Parenting</option>
              </select>
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
                required
              >
                <option value="">Pilih Status</option>
                <option value="Draft">Draft</option>
                <option value="Dipublikasikan">Dipublikasikan</option>
              </select>
            </div>
            <div>
              <label className="text-neutral-400 font-bold mb-1 block">Jumlah Dilihat</label>
              <input
                type="number"
                name="dilihat"
                value={formData.dilihat}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
                min="0"
              />
            </div>
          </div>

          {/* URL Gambar */}
          <div>
            <label className="text-neutral-400 font-bold mb-1 block">URL Gambar</label>
            <input
              type="url"
              name="img"
              value={formData.img}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="text-neutral-400 font-bold mb-1 block">Tags (pisahkan dengan koma)</label>
            <input
              type="text"
              value={formData.tags.join(', ')}
              onChange={handleTagsChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
              placeholder="balita, kesehatan, nutrisi"
            />
          </div>

          {/* Konten Artikel */}
          <div>
            <label className="text-neutral-400 font-bold mb-1 block">Konten Artikel</label>
            <textarea
              name="isi"
              value={formData.isi}
              onChange={handleInputChange}
              rows="10"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5F41B2] focus:border-transparent"
              placeholder="Masukkan konten artikel..."
              required
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button 
              type="submit"
              className="flex-1 bg-[#5F41B2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4A3590] transition-colors"
            >
              Simpan Perubahan
            </button>
            <button 
              type="button"
              onClick={onClose}
              className="flex-1 bg-white border border-[#5F41B2] text-[#5F41B2] px-6 py-3 rounded-lg font-semibold hover:bg-[#F4EEFF] transition-colors"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
      <style>{`
        .animate-modal-pop {
          animation: modalPop 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes modalPop {
          0% { opacity: 0; transform: scale(0.95) translateY(30px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
} 