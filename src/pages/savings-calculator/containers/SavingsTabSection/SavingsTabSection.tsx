import { useState } from 'react';
import { Tab } from 'tosslib';
import SavingsProductsTab from './SavingsProductsTab/SavingsProductsTab';
import CalculationResultTab from './CalculationResultTab/CalculationResultTab';

// selectedTab
const TAB_VALUES = ['products', 'results'] as const;
type TabValue = (typeof TAB_VALUES)[number];

const isTabValue = (value: string): value is TabValue => {
  return (TAB_VALUES as readonly string[]).includes(value);
};

export default function SavingsTabSection() {
  const [selectedTab, setSelectedTab] = useState<TabValue>('products');

  const handleTabChange = (value: string) => {
    if (!isTabValue(value)) {
      return;
    }
    setSelectedTab(value);
  };

  return (
    <>
      <Tab onChange={handleTabChange}>
        <Tab.Item value="products" selected={selectedTab === 'products'}>
          적금 상품
        </Tab.Item>
        <Tab.Item value="results" selected={selectedTab === 'results'}>
          계산 결과
        </Tab.Item>
      </Tab>

      {selectedTab === 'products' && <SavingsProductsTab />}
      {selectedTab === 'results' && <CalculationResultTab />}
    </>
  );
}
