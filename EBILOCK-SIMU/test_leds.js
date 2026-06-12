const falhas = [
      {
        desc: "Falha de comunicação",
        eq: "op1_a",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "op1_b",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "op2_a",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "op2_b",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "eng_a",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "eng_b",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "vent1_L11",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "vent1_L12",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "painel_a",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "painel_b",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "ventLuz_1",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "ventLuz_2",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "ventLuz_3",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "pclL13_a",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "pclL13_b",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "enLuz_km1",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "enLuz_km2",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "modemL13",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "ebilockLuz_a",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "ebilockLuz_b",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "ipuL11Luz_cmd",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "ipuL11Luz_a",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "ipuL11Luz_b",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "pc104Luz_a",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "pc104Luz_b",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "pclLuz",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "srv1_a",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "srv1_b",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "srv2_a",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "srv2_b",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "ipuBasL11_cmd",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "ipuBasL11_a",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "ipuBasL11_b",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "ipuBasL11_m",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "ipuBasL12_cmd",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "ipuBasL12_a",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "ipuBasL12_b",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "ipuBasL12_m",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "enNorteL11_km1",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "enNorteL11_km2",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "ocBasNorte_L11",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "vent3_L11",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "enSteL11_km1",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "enSteL12_km1",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "enSteL11_km2",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "enSteL12_km2",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "ocBasSte_L11",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "ocBasSte_L12",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "enLesteL11_km1",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "enLesteL12_km1",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "enLesteL11_km2",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "enLesteL12_km2",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "ocBasLeste_L11",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "ocBasLeste_L12",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "vent2_L11",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "vent2_L12",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "pc104Bas_A",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "pc104Bas_B",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "pclBasL11",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "pclBasL12",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "ipuL11",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "ipuL12",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "mlkAOffline",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "mlkBOffline",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "mlkA1Offline",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "mlkB1Offline",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "mlkA2Offline",
        status: "falha"
      },
      {
        desc: "Falha de comunicação",
        eq: "mlkB2Offline",
        status: "falha"
      }
    ];