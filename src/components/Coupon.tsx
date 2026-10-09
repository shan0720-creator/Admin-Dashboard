import React, { useState, useEffect } from 'react'
import AdminSidebar from './AdminSidebar'

const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const allNumbers = '1234567890'
const allSymbols = '!@#$%^&*()_+'

const Coupon = () => {
  const [size, setSize] = useState(8)
  const [prefix, setPrefix] = useState('')
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeCharacters, setIncludeCharacters] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const [coupon, setCoupon] = useState('')

  const copyHandler = async (text) => {
    await navigator.clipboard.writeText(text)
    setIsCopied(true)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (!includeNumbers && !includeCharacters && !includeSymbols) {
      return alert('Please Select At Least One Option')
    }

    let result = prefix
    const loopLength = size - prefix.length

    for (let i = 0; i < loopLength; i++) {
      let entireString = ''
      if (includeCharacters) entireString += allLetters
      if (includeNumbers) entireString += allNumbers
      if (includeSymbols) entireString += allSymbols

      const randomNum = Math.floor(Math.random() * entireString.length)
      result += entireString[randomNum]
    }

    setCoupon(result)
  }

  useEffect(() => {
    setIsCopied(false)
  }, [coupon])

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboard-app-container">
        <h1>Coupon Generator</h1>
        <section className="coupon-container">
          <form className="coupon-form" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Text to include (Prefix)"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              maxLength={size}
            />

            <input
              type="number"
              placeholder="Coupon Length"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              min={8}
              max={25}
            />

            <fieldset>
              <legend>Include Options</legend>

              <label>
                <input
                  type="checkbox"
                  checked={includeNumbers}
                  onChange={() => setIncludeNumbers((prev) => !prev)}
                />
                <span>Numbers</span>
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={includeCharacters}
                  onChange={() => setIncludeCharacters((prev) => !prev)}
                />
                <span>Characters</span>
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={includeSymbols}
                  onChange={() => setIncludeSymbols((prev) => !prev)}
                />
                <span>Symbols</span>
              </label>
            </fieldset>

            <button type="submit">Generate</button>
          </form>

          {coupon && (
            <code>
              {coupon}{' '}
              <span onClick={() => copyHandler(coupon)}>
                {isCopied ? 'Copied!' : 'Copy'}
              </span>
            </code>
          )}
        </section>
      </main>
    </div>
  )
}

export default Coupon