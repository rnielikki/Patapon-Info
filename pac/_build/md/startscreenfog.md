# startScreenFog

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `startScreenFog`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 18 01`
- **Assembly Address in Memory** : `0x8929c5c`

## Parameters

- `(Undefined)Var0` *(8 bytes)* : Unused
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*
- `(float)Var4` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 18 01 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / f0 d8 ff ff / 02 00 00 00 / 03 10 00 00 / 02 00 00 00 / 05 10 00 00 / 20 00 00 00 / 0b 00 00 00```

Which is interpreted as:

```c
startScreenFog((int)0, (int)0xf0d8ffff, (int)4099, (int)4101, (float *)fVar11)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08929c5c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  float *pfVar4;
  undefined4 local_40;
  undefined4 local_3c;
  undefined4 local_38;
  undefined4 local_30;
  undefined4 local_2c;
  undefined4 local_28;
  undefined4 local_24;
  undefined4 local_20;
  undefined4 local_1c;
  undefined4 local_18;
  undefined4 local_14;
  undefined4 local_10;
  
  Pac_Get_Param(param_2,0,1,4);
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  pfVar4 = (float *)Pac_Get_Param(param_2,4,1,4);
  local_30 = DAT_08a70be0;
  local_2c = DAT_08a70be4;
  local_28 = DAT_08a70be8;
  local_24 = DAT_08a70bec;
  local_20 = DAT_08a70bf0;
  local_1c = DAT_08a70bf4;
  local_18 = DAT_08a70bf8;
  local_14 = DAT_08a70bfc;
  local_10 = DAT_08a70c00;
  local_40 = *puVar2;
  local_3c = *puVar3;
  local_38 = *puVar1;
  if (DAT_08a70c10 < *pfVar4) {
    pfVar4 = &DAT_08a70c10;
  }
  FUN_089803c4(*pfVar4,*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2b8) + 0x3c) + 0x2a0,&local_40
              );
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

