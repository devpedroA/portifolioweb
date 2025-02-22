"use client";

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";
import Image from "next/image";
import { ExternalLink, X } from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  description: string;
  issueDate: string;
  imageUrl: string;
  certificateUrl: string;
}

export default function Certificates() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null); // Estado para o certificado selecionado

  useEffect(() => {
    const fetchCertificates = async () => {
      const certificatesCollection = collection(db, "certificates");
      const certificateSnapshot = await getDocs(certificatesCollection);
      const certificateList = certificateSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Certificate[];
      setCertificates(certificateList);
      setLoading(false);
    };

    fetchCertificates();
  }, []);

  const getValidCertificateUrl = (url: string) => {
    if (url.includes("localhost")) {
      return url.replace("http://localhost:3000/", ""); // Remove "localhost:3000"
    }
    return url;
  };

  const openModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate); // Define o certificado selecionado
  };

  const closeModal = () => {
    setSelectedCertificate(null); // Fecha o modal
  };

  if (loading) {
    return (
      <section
        id="certificates"
        className="py-16 bg-gradient-to-br from-[#0B0B1A] to-[#141429]"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-white">Certificados</h2>
          <p className="text-white/80">Carregando certificados...</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="certificates"
      className="py-16 bg-gradient-to-br from-[#0B0B1A] to-[#141429]"
    >
      <div className="container mx-auto shadow-[0_0_20px_rgba(168,85,247,0.4)]px-4">
        <h2 className="text-4xl font-bold mb-8 text-white text-with-underline">
          Certificados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-white/5 rounded-lg shadow-lg   hover:scale-105 transition duration-200  overflow-hidden"
            >
              <div
                className="relative h-48 cursor-pointer"
                onClick={() => openModal(certificate)}
              >
                <Image
                  src={certificate.imageUrl || "/placeholder.svg"}
                  alt={certificate.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-purple-500">
                  {certificate.title}
                </h3>
                {/* <p className="mb-4 text-sm text-white/80">{certificate.description}</p> */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/60">
                    Emitido em: {certificate.issueDate}
                  </span>
                </div>
                <a
                  href={getValidCertificateUrl(certificate.certificateUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors"
                >
                  Ver Certificado <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para exibir o certificado em tamanho maior */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white/10 rounded-lg shadow-lg max-w-3xl w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-purple-500 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="relative h-[80vh]">
              <Image
                src={selectedCertificate.imageUrl || "/placeholder.svg"}
                alt={selectedCertificate.title}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-purple-500">
                {selectedCertificate.title}
              </h3>
              <p className="text-white/80">{selectedCertificate.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
