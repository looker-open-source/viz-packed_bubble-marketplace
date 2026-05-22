project_name: "viz-packed_bubble-marketplace"

constant: VIS_LABEL {
  value: "Packed Bubble"
  export: override_optional
}

constant: VIS_ID {
  value: "packed_bubble-marketplace"
  export:  override_optional
}

visualization: {
  id: "@{VIS_ID}"
  url: "https://static-a.cdn.looker.app/marketplace/viz-dist/packed_bubble.js"
  label: "@{VIS_LABEL}"
}

