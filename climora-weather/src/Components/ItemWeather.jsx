import React from 'react'

const ItemWeather = () => {
  return (
    <div className="info">
        <button>fechar</button>
        <p>Niterói, RJ - Brasil</p>
        <h2>20ºC Nublado</h2>
        <div className="min">
            <p>20º</p>
        </div>
        <div className="max">
            <p>20º</p>
        </div>
        <div className="linha"></div>
        <div className="days_week">
            <table>
                <thead>
                    <tr>
                        <th>Qua</th>
                        <th>Qui</th>
                        <th>Sex</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>18º | 20º</td>
                        <td>18º | 20º</td>
                        <td>18º | 20º</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
  )
}

export default ItemWeather