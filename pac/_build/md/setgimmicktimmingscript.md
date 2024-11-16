# setGimmickTimmingScript

When the gimmick is created, *call*s the specific address.

## Code Information

- **Name**: `setGimmickTimmingScript`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 0a 00`
- **Assembly Address in Memory** : `0x8919814`

## Parameters


- `(int)gimmickID` *(8 bytes)* : [Gimmick ID](./guide/reference-table.md#gimmickparam-ids) from `gimmickparam`.
- `(int)Var1` *(8 bytes)* : Expected 0~4.
- `(MemoryAddress)pac_address` *(8 bytes)* : Memory address that contains start of the PAC, obtained from [getPack](./getpack_25100600.md).
- `(address)Address` *(8 bytes)* : Does not call anything if the value is `-1` (`ff ff ff ff`).

## Example

Here is one example in hex:

```25 16 0a 00 / 02 00 00 00 / 42 02 00 00 / 02 00 00 00 / 00 00 00 00 / 04 00 00 00 / 00 00 00 00 / 01 00 00 00 / b0 05 00 00```

Which is interpreted as:

```c
setGimmickTimmingScript((int)578, (int)0, (int *)iVar0, (index)1456)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08919814(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  int iVar5;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  iVar5 = *(int *)(*(int *)(param_1 + 0x10) + 0x108);
  if (iVar5 != 0) {
    FUN_088b4644(iVar5,*puVar1,*puVar2,*puVar3,*puVar4);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

