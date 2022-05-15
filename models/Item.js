import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'Proporcione un nombre para este objeto'],
    maxlength: [60, 'El  nombre no puede tener mas de 60 caracteres']
  },
  short_descripcion: {
    type: String,
    required: [true, 'Proporcione una descripcion para este objeto'],
    maxlength: [60, 'La descripcion no puede tener mas de 240 caracteres']
  },
  descripcion: {
    type: String,
    required: [true, 'Proporcione una descripcion para este objeto'],
    maxlength: [240, 'La descripcion no puede tener mas de 240 caracteres']
  },
  imagen: {
    type: Array,
    default:
      [
        'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
      ]
  },
  precio: {
    type: Number,
    required: [true, 'Proporcione un precio para este objeto']
  },
  vendido: {
    type: Boolean,
    default: false,
  }
});

export default mongoose.models.Item || mongoose.model('Item', ItemSchema);
