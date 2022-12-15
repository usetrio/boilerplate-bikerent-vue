import { BikeBookmark, BikeCard, BikePrice } from '@/components/bike'
import { describe, expect, it, vi } from 'vitest'

import { CurrencyCode } from '@/core/config'
import { mockIntersectionObserver } from '@/core/helpers/tests'
import { mockedBike } from '@/mocks/'
import { mount } from '@vue/test-utils'
import router from '@/router'

describe('BikeCard', () => {
  vi.stubGlobal('IntersectionObserver', mockIntersectionObserver)

  it('renders correctly', () => {
    const wrapper = mount(BikeCard, { props: { data: mockedBike }, global: { plugins: [router] } })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('displays title', () => {
    const wrapper = mount(BikeCard, { props: { data: mockedBike, fluid: true }, global: { plugins: [router] } })

    expect(wrapper.find('.bike-card__title').text()).equals(mockedBike.name)
  })

  it('renders url', () => {
    const wrapper = mount(BikeCard, { props: { data: mockedBike, fluid: true }, global: { plugins: [router] } })
    const { fullPath: routeStub } = router.resolve({ name: 'details', params: { id: mockedBike.id } })

    expect(wrapper.findComponent({ name: 'router-link' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'router-link' }).find('a').attributes('href')).equals(routeStub)
  })

  it('renders bookmark button', () => {
    const wrapper = mount(BikeCard, { props: { data: mockedBike, fluid: true }, global: { plugins: [router] } })

    expect(wrapper.findComponent(BikeBookmark).exists()).toBe(true)
  })

  it('renders image', () => {
    const wrapper = mount(BikeCard, { props: { data: mockedBike, fluid: true }, global: { plugins: [router] } })

    expect(wrapper.find('.bike-card__image img').exists()).toBe(true)
  })

  it('renders price correctly', () => {
    const wrapper = mount(BikeCard, { props: { data: mockedBike, fluid: true }, global: { plugins: [router] } })
    const bikePriceStub = mount(BikePrice, {
      props: { price: mockedBike.rate, currency: CurrencyCode.EUR, rate: 'daily' }
    })

    expect(wrapper.findComponent(BikePrice).exists()).toBe(true)
    expect(wrapper.findComponent(BikePrice).text()).equal(bikePriceStub.text())
  })

  it('displays fluid layout', () => {
    const wrapper = mount(BikeCard, { props: { data: mockedBike, fluid: true }, global: { plugins: [router] } })

    expect(wrapper.classes()).includes('bike-card--fluid')
  })
})
