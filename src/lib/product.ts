export type ProductSpec = {
  key: string;
  label: string;
  value: string;
  unit?: string;
  /**
   * A spec is only published as a fact when this is true. Anything left
   * unconfirmed is omitted from the UI, structured data and technical drawings
   * until the owner supplies a verified figure.
   */
  confirmed: boolean;
};

export const product: {
  name: string;
  category: string;
  description: string;
  specs: ProductSpec[];
} = {
  name: "Ephtech Board",
  category: "Engineered ceiling and wall board",
  description:
    "A dry, factory-finished board system for suspended ceilings, partitions, wall linings and joinery. Supplied and installed by one team.",
  specs: [
    {
      key: "thickness",
      label: "Thickness",
      value: "12.5",
      unit: "mm",
      confirmed: false,
    },
    {
      key: "panelSize",
      label: "Panel size",
      value: "1200 × 2400",
      unit: "mm",
      confirmed: false,
    },
    {
      key: "core",
      label: "Core",
      value: "Moisture-resistant",
      confirmed: true,
    },
    {
      key: "curing",
      label: "Curing time",
      value: "0",
      unit: "hours",
      confirmed: true,
    },
  ],
};

export const pillars = [
  {
    title: "Strength",
    body: "High impact resistance and structural stability. Resists cracking, sagging and edge chipping under movement.",
  },
  {
    title: "Moisture",
    body: "Formulated for humid Nigerian conditions, resisting swelling, staining and mould growth.",
  },
  {
    title: "Speed",
    body: "Dry installation with zero curing downtime. Cut, fix, joint and paint. No scaffolding, no mess.",
  },
];

export const confirmedSpecs = product.specs.filter((spec) => spec.confirmed);

export function specByKey(key: string) {
  return product.specs.find((spec) => spec.key === key);
}

export function formatSpec(spec?: ProductSpec) {
  if (!spec) return "";
  return spec.unit ? `${spec.value} ${spec.unit}` : spec.value;
}
