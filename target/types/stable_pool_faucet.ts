export type StablePoolFaucet = {
  "version": "0.1.0",
  "name": "stable_pool_faucet",
  "instructions": [
    {
      "name": "createState",
      "accounts": [
        {
          "name": "superOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "faucetState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintUsdcUsdrLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintEthSolLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintAtlasRayLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintSamoRayLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "stateNonce",
          "type": "u8"
        },
        {
          "name": "mintUsdcUsdrLpNonce",
          "type": "u8"
        },
        {
          "name": "mintEthSolLpNonce",
          "type": "u8"
        },
        {
          "name": "mintAtlasRayLpNonce",
          "type": "u8"
        },
        {
          "name": "mintSamoRayLpNonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "faucetUsdcUsdrLp",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "faucetState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "stateNonce",
          "type": "u8"
        },
        {
          "name": "mintLpNonce",
          "type": "u8"
        },
        {
          "name": "userTokenLpNonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "faucetEthSolLp",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "faucetState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "stateNonce",
          "type": "u8"
        },
        {
          "name": "mintLpNonce",
          "type": "u8"
        },
        {
          "name": "userTokenLpNonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "faucetAtlasRayLp",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "faucetState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "stateNonce",
          "type": "u8"
        },
        {
          "name": "mintLpNonce",
          "type": "u8"
        },
        {
          "name": "userTokenLpNonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "faucetSamoRayLp",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "faucetState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "stateNonce",
          "type": "u8"
        },
        {
          "name": "mintLpNonce",
          "type": "u8"
        },
        {
          "name": "userTokenLpNonce",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "faucet",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "superOwner",
            "type": "publicKey"
          },
          {
            "name": "mintUsdcUsdrLp",
            "type": "publicKey"
          },
          {
            "name": "mintEthSolLp",
            "type": "publicKey"
          },
          {
            "name": "mintAtlasRayLp",
            "type": "publicKey"
          },
          {
            "name": "mintSamoRayLp",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "Unauthorized",
      "msg": "You are not authorized to perform this action."
    },
    {
      "code": 6001,
      "name": "AlreadyInUse",
      "msg": "AlreadyInUse"
    },
    {
      "code": 6002,
      "name": "InvalidProgramAddress",
      "msg": "InvalidProgramAddress"
    },
    {
      "code": 6003,
      "name": "InvalidState",
      "msg": "InvalidState"
    },
    {
      "code": 6004,
      "name": "InvalidOwner",
      "msg": "InvalidOwner"
    },
    {
      "code": 6005,
      "name": "NotAllowed",
      "msg": "NotAllowed"
    },
    {
      "code": 6006,
      "name": "MathOverflow",
      "msg": "Math operation overflow"
    },
    {
      "code": 6007,
      "name": "InvalidOracleConfig",
      "msg": "InvalidOracleConfig"
    },
    {
      "code": 6008,
      "name": "InvalidAccountInput",
      "msg": "InvalidAccountInput"
    }
  ]
};

export const IDL: StablePoolFaucet = {
  "version": "0.1.0",
  "name": "stable_pool_faucet",
  "instructions": [
    {
      "name": "createState",
      "accounts": [
        {
          "name": "superOwner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "faucetState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintUsdcUsdrLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintEthSolLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintAtlasRayLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintSamoRayLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "stateNonce",
          "type": "u8"
        },
        {
          "name": "mintUsdcUsdrLpNonce",
          "type": "u8"
        },
        {
          "name": "mintEthSolLpNonce",
          "type": "u8"
        },
        {
          "name": "mintAtlasRayLpNonce",
          "type": "u8"
        },
        {
          "name": "mintSamoRayLpNonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "faucetUsdcUsdrLp",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "faucetState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "stateNonce",
          "type": "u8"
        },
        {
          "name": "mintLpNonce",
          "type": "u8"
        },
        {
          "name": "userTokenLpNonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "faucetEthSolLp",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "faucetState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "stateNonce",
          "type": "u8"
        },
        {
          "name": "mintLpNonce",
          "type": "u8"
        },
        {
          "name": "userTokenLpNonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "faucetAtlasRayLp",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "faucetState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "stateNonce",
          "type": "u8"
        },
        {
          "name": "mintLpNonce",
          "type": "u8"
        },
        {
          "name": "userTokenLpNonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "faucetSamoRayLp",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "faucetState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mintLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenLp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "stateNonce",
          "type": "u8"
        },
        {
          "name": "mintLpNonce",
          "type": "u8"
        },
        {
          "name": "userTokenLpNonce",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "faucet",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "superOwner",
            "type": "publicKey"
          },
          {
            "name": "mintUsdcUsdrLp",
            "type": "publicKey"
          },
          {
            "name": "mintEthSolLp",
            "type": "publicKey"
          },
          {
            "name": "mintAtlasRayLp",
            "type": "publicKey"
          },
          {
            "name": "mintSamoRayLp",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "Unauthorized",
      "msg": "You are not authorized to perform this action."
    },
    {
      "code": 6001,
      "name": "AlreadyInUse",
      "msg": "AlreadyInUse"
    },
    {
      "code": 6002,
      "name": "InvalidProgramAddress",
      "msg": "InvalidProgramAddress"
    },
    {
      "code": 6003,
      "name": "InvalidState",
      "msg": "InvalidState"
    },
    {
      "code": 6004,
      "name": "InvalidOwner",
      "msg": "InvalidOwner"
    },
    {
      "code": 6005,
      "name": "NotAllowed",
      "msg": "NotAllowed"
    },
    {
      "code": 6006,
      "name": "MathOverflow",
      "msg": "Math operation overflow"
    },
    {
      "code": 6007,
      "name": "InvalidOracleConfig",
      "msg": "InvalidOracleConfig"
    },
    {
      "code": 6008,
      "name": "InvalidAccountInput",
      "msg": "InvalidAccountInput"
    }
  ]
};
