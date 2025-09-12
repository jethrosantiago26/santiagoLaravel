import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Portfolio() {
  const [artworks, setArtworks] = useState([]);
  const [selectedArt, setSelectedArt] = useState(null);

  useEffect(() => {
    fetchArtworks();
  }, []);

  const fetchArtworks = async () => {
    try {
      const res = await axios.get("/api/artworks");
      setArtworks(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error(err);
      setArtworks([]);
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "center" }}>
        Portfolio
      </h1>
      <p style={{ textAlign: "center", marginBottom: "2rem", color: "#4a5568" }}>
        Explore Santiago&apos;s artworks and creative projects.
      </p>

      {/* 3-column grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
        }}
      >
        {artworks.map((art) => (
          <div
            key={art.id}
            style={{
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onClick={() => setSelectedArt(art)} // open modal
          >
            {art.image_url && (
              <div
                style={{
                  overflow: "hidden",
                  position: "relative",
                  height: "250px",
                }}
              >
                <img
                  src={art.image_url}
                  alt={art.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.25s ease-in-out",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
            )}
            <div style={{ padding: "1rem" }}>
              <h3
                style={{
                  fontSize: "1.25rem",
                  marginBottom: "0.5rem",
                  color: "#2d3748",
                }}
              >
                {art.title}
              </h3>
              <p
                style={{
                  color: "#4a5568",
                  fontSize: "0.95rem",
                  lineHeight: "1.4",
                }}
              >
                {art.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedArt && (
        <div
          onClick={() => setSelectedArt(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            cursor: "zoom-out",
          }}
        >
          <div style={{ position: "relative" }}>
            <img
              src={selectedArt.image_url}
              alt={selectedArt.title}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                borderRadius: "12px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                transition: "transform 0.3s ease",
              }}
            />
            <button
              onClick={() => setSelectedArt(null)}
              style={{
                position: "absolute",
                top: "-40px",
                right: "-40px",
                background: "white",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
