# effectSetTimmingScript

When the effect is activated, *call*s the specific address. Does same thing as [setEffectTimmingScript](./seteffecttimmingscript.md), except the parameter order is a bit different.

## Code Information

- **Name**: `effectSetTimmingScript`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 19 0b 00`
- **Assembly Address in Memory** : `0x89419fc`

## Parameters

- `(undefined4)Var0` *(8 bytes)* : Expected 0~4.
- `(int)effectID` *(8 bytes)* : Effect ID from `effectparam`.
- `(MemoryAddress)pac_address` *(8 bytes)* : Memory address that contains start of the PAC, obtained from [getPack](./getpack_25100600.md).
- `(Address)address` *(8 bytes)* : Address to move when effect is performed.

## Example

Here is one example in hex:

```25 19 0b 00 / 02 00 00 00 / 02 00 00 00 / 02 00 00 00 / 76 00 00 00 / 04 00 00 00 / 00 00 00 00 / 01 00 00 00 / 0c 20 00 00```

Which is interpreted as:

```c
effectSetTimmingScript((int)2, (int)118, (int *)iVar0, (index)8204)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089419fc(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  if (*(int *)(param_1 + 0x10) != 0) {
    FUN_088ad8a8(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0x128),*puVar2,*puVar1,*puVar3,*puVar4);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

