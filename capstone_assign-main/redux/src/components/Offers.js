import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOffers } from '../actions/offerActions'

const Offers = () => {
  const { offers, loading } = useSelector((state) => state.offers)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOffers())
  }, [dispatch])

  return (
    <section className="panel offers-panel">
      <div className="panel-header">
        <h2>Offers</h2>
      </div>
      {loading ? (
        <p className="panel-empty">Loading offers...</p>
      ) : (
        <ul className="offers-list">
          {offers.map((offer, index) => (
            <li key={index}>{offer}</li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Offers
