import Filters from '@/components/Filters';
import Lists from '@/components/Lists';

export default function Aside({ SET_FILTER, FILTER, obj }) {
  const { Shows, Order } = obj;

  return (
    <>
      <Lists
        setLists={(val) => SET_FILTER({ ...FILTER, status: val })}
        lists={['All', ...Object.keys(Shows)]}
        defaultVal={FILTER.status}
        label="Status"
      />
      <Filters
        FILTER={FILTER}
        setFilters={(key, val) => SET_FILTER({ ...FILTER, [key]: val })}
      />
      <Lists
        setLists={(val) => SET_FILTER({ ...FILTER, asc: val === Order[0] })}
        lists={Order}
        defaultVal={Order[FILTER.asc ? 0 : 1]}
        label="Order"
      />
    </>
  );
}
