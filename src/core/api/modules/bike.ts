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
 * List Bikes
 *
 * @param {boolean} [available=false] List only available bikes for renting
 *
 * @returns {Promise<Bike[]>}
 */
export async function list(available = false): Promise<Bike[]> {
  return available ? await listAvailable() : await listAll()
}

/**
 * Lists all bikes.
 *
 * @returns {Promise<Bike[]>}
 */
export async function listAll(): Promise<Bike[]> {
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
