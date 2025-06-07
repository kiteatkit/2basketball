import React from 'react';
import { Download, FileText } from 'lucide-react';

const DocumentsSection = () => {
  const documents = [
    {
      id: 2,
      title: 'Согласие на обработку персональных данных',
      description: 'Форма согласия на обработку персональных данных для учеников и родителей',
      filename: 'soglasie-pd.pdf',
      fileUrl: '/documents/soglasie-pd.pdf'
    }
  ];

  const handleDownload = (fileUrl: string, filename: string) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="documents" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-russo text-black mb-4">Документы</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Необходимые документы для участия в тренировках баскетбольной школы "Викинги"
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {documents.map((doc) => (
            <div key={doc.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-viking-orange/10 p-3 rounded-lg">
                  <FileText className="h-8 w-8 text-viking-orange" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-2">{doc.title}</h3>
                  <p className="text-gray-600 mb-4">{doc.description}</p>
                  <button
                    onClick={() => handleDownload(doc.fileUrl, doc.filename)}
                    className="flex items-center space-x-2 bg-viking-orange text-white px-4 py-2 rounded-lg hover:bg-viking-orange/90 transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    <span>Скачать PDF</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Если у вас возникли вопросы по документам, свяжитесь с нами через{' '}
            <a href="#contact" className="text-viking-orange hover:underline">форму обратной связи</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection; 