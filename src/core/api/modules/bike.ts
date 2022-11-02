// import { ApiResponseError, client } from '@/core/api'
import { client } from '@/core/api'
interface BikeRent {
  rentAmount: number
  fee: 60
  totalAmount: 460
}

interface BikeRentDetails {
  bikeId: number
  userId: number
  dateFrom: string
  dateTo: string
}

/**
 * List all Bikes (including rented)
 *
 * @returns {Promise<Bike[]>}
 */
export async function list(): Promise<Bike[]> {
  const { data } = await client.get<Bike[]>('bikes')

  return data
}

/**
 * Lists only available bikes, bikes that are not rented.
 *
 * @returns {Promise<Bike[]>}
 */
export async function listAvailable(): Promise<Bike[]> {
  const { data } = await client.get<Bike[]>('bikes/available')

  return data
}

/**
 * Rents a bike; you can also book future rents.
 *
 *
 * @param details
 * @returns
 */
export async function rent(details: BikeRentDetails): Promise<BikeRent> {
  const { data } = await client.post<BikeRent>('bikes/rent', details)

  return data
}
