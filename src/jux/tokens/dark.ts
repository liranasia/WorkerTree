/**
 * This file is generated by Jux. For more information on how to use this file, visit https://jux.io/docs
 */

export const dark = {
  border: {
    $description: "Border tokens",
    specific: {
      $description:
        "Specific tokens are used for targeting individual components or sets of components of the same kind.They are always alias tokens, either pointing to core or alias tokens.\nSpecific folders can’t be edited or deleted.",
    },
    semantic: {
      $description:
        "Semantic tokens are used for representing broad purpose or intent which remains true when switching between token sets.They are always alias tokens, usually pointing to core tokens.\nSemantic folders can’t be edited or deleted.",
    },
    default: {
      $description: "Default",
    },
    core: {
      $description:
        "Core tokens are used as the base palette of global visual options in any token type.They are usually primitive tokens, pointing to a concrete value.\nCore folders can’t be edited or deleted.",
    },
  },
  typography: {
    $description: "Typography tokens",
    specific: {
      $description:
        "Specific tokens are used for targeting individual components or sets of components of the same kind.They are always alias tokens, either pointing to core or alias tokens.\nSpecific folders can’t be edited or deleted.",
    },
    semantic: {
      $description:
        "Semantic tokens are used for representing broad purpose or intent which remains true when switching between token sets.They are always alias tokens, usually pointing to core tokens.\nSemantic folders can’t be edited or deleted.",
      "label-x-small-regular": {
        $value: "{dark.typography.core.11_regular}",
        $description: "",
      },
      "label-x-small-medium": {
        $value: "{dark.typography.core.11_medium}",
        $description: "",
      },
      "helper-small-regular": {
        $value: "{dark.typography.core.12_regular}",
        $description: "",
      },
      "label-small-regular": {
        $value: "{dark.typography.core.12_regular}",
        $description: "",
      },
      "label-small-medium": {
        $value: "{dark.typography.core.12_medium}",
        $description: "",
      },
      "label-small-bold": {
        $value: "{dark.typography.core.12_bold}",
        $description: "",
      },
      body_regular: {
        $value: "{dark.typography.core.14_regular}",
        $description: "",
      },
      body_semi: {
        $value: "{dark.typography.core.14_semi}",
        $description: "",
      },
      body_bold: {
        $value: "{dark.typography.core.14_bold}",
        $description: "",
      },
      header_2: {
        $value: "{dark.typography.core.16_regular}",
        $description: "",
      },
      header_1: {
        $value: "{dark.typography.core.28_regular}",
        $description: "",
      },
    },
    default: {
      $description: "Default",
    },
    core: {
      $description:
        "Core tokens are used as the base palette of global visual options in any token type.They are usually primitive tokens, pointing to a concrete value.\nCore folders can’t be edited or deleted.",
      "28_regular": {
        $description: "",
        $value: {
          fontSize: "28px",
          fontFamily: "{dark.fontFamily.core.base}",
          fontWeight: "400",
          lineHeight: "100px",
          letterSpacing: "",
        },
      },
      "16_regular": {
        $description: "",
        $value: {
          fontSize: "16px",
          fontFamily: "{dark.fontFamily.core.base}",
          fontWeight: "400",
          lineHeight: "150%",
          letterSpacing: "",
        },
      },
      "14_regular": {
        $description: "",
        $value: {
          fontSize: "14px",
          fontFamily: "{dark.fontFamily.core.base}",
          fontWeight: "400",
          lineHeight: "20px",
          letterSpacing: "",
        },
      },
      "12_regular": {
        $description: "",
        $value: {
          fontSize: "12px",
          fontFamily: "{dark.fontFamily.core.base}",
          fontWeight: "400",
          lineHeight: "16px",
          letterSpacing: "",
        },
      },
      "11_regular": {
        $description: "",
        $value: {
          fontSize: "11px",
          fontFamily: "{dark.fontFamily.core.base}",
          fontWeight: "400",
          lineHeight: "14px",
          letterSpacing: "",
        },
      },
      "12_medium": {
        $description: "",
        $value: {
          fontSize: "12px",
          fontFamily: "{dark.fontFamily.core.base}",
          fontWeight: "500",
          lineHeight: "16px",
          letterSpacing: "",
        },
      },
      "11_medium": {
        $description: "",
        $value: {
          fontSize: "11px",
          fontFamily: "{dark.fontFamily.core.base}",
          fontWeight: "500",
          lineHeight: "16px",
          letterSpacing: "",
        },
      },
      "14_semi": {
        $description: "",
        $value: {
          fontSize: "14px",
          fontFamily: "{dark.fontFamily.core.base}",
          fontWeight: "600",
          lineHeight: "20px",
          letterSpacing: "1%",
        },
      },
      "14_bold": {
        $description: "",
        $value: {
          fontSize: "14px",
          fontFamily: "{dark.fontFamily.core.base}",
          fontWeight: "700",
          lineHeight: "20px",
          letterSpacing: "1%",
        },
      },
      "12_bold": {
        $description: "",
        $value: {
          fontSize: "12px",
          fontFamily: "{dark.fontFamily.core.base}",
          fontWeight: "700",
          lineHeight: "16px",
          letterSpacing: "",
        },
      },
    },
  },
  fontFamily: {
    $description: "Font family tokens",
    specific: {
      $description:
        "Specific tokens are used for targeting individual components or sets of components of the same kind.They are always alias tokens, either pointing to core or alias tokens.\nSpecific folders can’t be edited or deleted.",
    },
    semantic: {
      $description:
        "Semantic tokens are used for representing broad purpose or intent which remains true when switching between token sets.They are always alias tokens, usually pointing to core tokens.\nSemantic folders can’t be edited or deleted.",
    },
    default: {
      $description: "Default",
    },
    core: {
      $description:
        "Core tokens are used as the base palette of global visual options in any token type.They are usually primitive tokens, pointing to a concrete value.\nCore folders can’t be edited or deleted.",
      base: {
        $value: "Inter, sans-serif",
        $description: "",
      },
    },
  },
  dimension: {
    "200": {
      $description: "",
      $value: "200px",
    },
    $description: "Dimension tokens",
    specific: {
      $description:
        "Specific tokens are used for targeting individual components or sets of components of the same kind.They are always alias tokens, either pointing to core or alias tokens.\nSpecific folders can’t be edited or deleted.",
      button_radius: {
        $value: "{dark.dimension.semantic.small_border_radius}",
        $description: "",
      },
      button_4: {
        $value: "4px",
        $description: "",
      },
    },
    semantic: {
      $description:
        "Semantic tokens are used for representing broad purpose or intent which remains true when switching between token sets.They are always alias tokens, usually pointing to core tokens.\nSemantic folders can’t be edited or deleted.",
      small_border_radius: {
        $value: "{dark.dimension.core.space_xs}",
        $description: "",
      },
    },
    default: {
      $description: "Default",
    },
    core: {
      $description:
        "Core tokens are used as the base palette of global visual options in any token type.They are usually primitive tokens, pointing to a concrete value.\nCore folders can’t be edited or deleted.",
      padding_sides: {
        $value: "2.5rem",
        $description: "",
      },
      radius_round: {
        $value: "9999px",
        $description: "",
      },
      space_3xl: {
        $value: "48px",
        $description: "",
      },
      space_2xl: {
        $value: "32px",
        $description: "",
      },
      space_xs: {
        $value: "2px",
        $description: "",
      },
      space_xl: {
        $value: "24px",
        $description: "",
      },
      space_sm: {
        $value: "4px",
        $description: "",
      },
      space_ml: {
        $value: "12px",
        $description: "",
      },
      space_md: {
        $value: "8px",
        $description: "",
      },
      space_lg: {
        $value: "16px",
        $description: "",
      },
      size_3xl: {
        $value: "128px",
        $description: "",
      },
      size_2xl: {
        $value: "64px",
        $description: "",
      },
      size_2lg: {
        $value: "48px",
        $description: "new ",
      },
      radius_s: {
        $value: "4px",
        $description: "",
      },
      radius_m: {
        $value: "8px",
        $description: "",
      },
      radius_l: {
        $value: "12px",
        $description: "",
      },
      size_xs: {
        $value: "8px",
        $description: "",
      },
      size_xl: {
        $value: "52px",
        $description: "",
      },
      size_sm: {
        $value: "16px",
        $description: "",
      },
      size_ml: {
        $value: "32px",
        $description: "",
      },
      size_lg: {
        $value: "40px",
        $description: "",
      },
      size_m: {
        $value: "24px",
        $description: "",
      },
    },
  },
  color: {
    $description: "Color tokens",
    border_base: {
      "0": {
        $value: "{core.color.greys.400}",
      },
      m3: {
        $value: "{core.color.greys.700}",
      },
      m2: {
        $value: "{core.color.greys.650}",
      },
      m1: {
        $value: "{core.color.greys.500}",
      },
      p3: {
        $value: "{core.color.greys.50}",
      },
      p1: {
        $value: "{core.color.greys.200}",
      },
    },
    text_blue: {
      "0": {
        $value: "{core.color.blues.500}",
      },
      p3: {
        $value: "{core.color.blues.100}",
      },
      p2: {
        $value: "{core.color.blues.200}",
      },
      p1: {
        $value: "{core.color.blues.300}",
      },
      m3: {
        $value: "{core.color.blues.900}",
      },
      m2: {
        $value: "{core.color.blues.800}",
      },
      m1: {
        $value: "{core.color.blues.700}",
      },
    },
    text_base: {
      "0": {
        $value: "{core.color.greys.400}",
      },
      p3: {
        $value: "{core.color.greys.50}",
      },
      p2: {
        $value: "{core.color.greys.150}",
      },
      p1: {
        $value: "{core.color.greys.200}",
      },
      m5: {
        $value: "{core.color.greys.900}",
      },
      m1: {
        $value: "{core.color.greys.500}",
      },
    },
    fill_pink: {
      "0": {
        $value: "{core.color.pinks.500}",
      },
      p2: {
        $value: "{core.color.pinks.200}",
      },
      m2: {
        $value: "{core.color.pinks.800}",
      },
    },
    fill_blue: {
      "0": {
        $value: "{core.color.blues.500}",
      },
      p3: {
        $value: "{core.color.blues.100}",
      },
      p2: {
        $value: "{core.color.blues.200}",
      },
      p1: {
        $value: "{core.color.blues.300}",
      },
      m3: {
        $value: "{core.color.blues.900}",
      },
      m2: {
        $value: "{core.color.blues.800}",
      },
      m1: {
        $value: "{core.color.blues.700}",
      },
    },
    fill_base: {
      "0": {
        $value: "{core.color.greys.400}",
      },
      p3: {
        $value: "{core.color.greys.50}",
      },
      p2: {
        $value: "rgba(235 235 235 / 100%)",
      },
      p1: {
        $value: "{core.color.greys.200}",
      },
      m5: {
        $value: "{core.color.greys.900}",
      },
      m4: {
        $value: "{core.color.greys.800}",
      },
      m3: {
        $value: "{core.color.greys.700}",
      },
      m2: {
        $value: "{core.color.greys.650}",
      },
      m1: {
        $value: "{core.color.greys.500}",
      },
    },
    text_purple: {
      "0": {
        $value: "{core.color.purples.500}",
      },
      p3: {
        $value: "{core.color.purples.100}",
      },
      p2: {
        $value: "{core.color.purples.200}",
      },
      p1: {
        $value: "{core.color.purples.300}",
      },
      m3: {
        $value: "{core.color.purples.900}",
      },
      m2: {
        $value: "{core.color.purples.800}",
      },
      m1: {
        $value: "{core.color.purples.700}",
      },
    },
    fill_yellow: {
      "0": {
        $value: "{core.color.yellows.500}",
      },
      p2: {
        $value: "{core.color.yellows.200}",
      },
      m2: {
        $value: "{core.color.yellows.800}",
      },
    },
    fill_purple: {
      "0": {
        $value: "{core.color.purples.500}",
      },
      p3: {
        $value: "{core.color.purples.100}",
      },
      p2: {
        $value: "{core.color.purples.200}",
      },
      p1: {
        $value: "{core.color.purples.300}",
      },
      m3: {
        $value: "{core.color.purples.900}",
      },
      m2: {
        $value: "{core.color.purples.800}",
      },
      m1: {
        $value: "{core.color.purples.700}",
      },
    },
    border_blue: {
      "0": {
        $value: "{core.color.blues.500}",
      },
      p3: {
        $value: "{core.color.blues.100}",
      },
      p2: {
        $value: "{core.color.blues.200}",
      },
      p1: {
        $value: "{core.color.blues.300}",
      },
      m3: {
        $value: "{core.color.blues.900}",
      },
      m2: {
        $value: "{core.color.blues.800}",
      },
      m1: {
        $value: "{core.color.blues.700}",
      },
    },
  },
};