import React from 'react'

const Loader = () => {
  return (
    <section
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(247, 247, 247, 0.8)',
      }}
    >
      {/* Dynamic Keyframes for Inline Animation */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      <div
        style={{
          width: '5rem',
          height: '5rem',
          border: '6px solid #e0e0e0',
          borderTop: '6px solid #0073ff',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }}
      />
    </section>
  )
}

export default Loader