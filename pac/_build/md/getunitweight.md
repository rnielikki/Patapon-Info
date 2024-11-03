# getUnitWeight

Gets weight of the unit by given handle. Works on unit only.

## Code Information

- **Name**: `getUnitWeight`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 15 01`
- **Assembly Address in Memory** : `0x89298e0`

## Parameters

- `(int *)unit_handle` *(8 bytes)* : Handle of an unit.
- `(float *)destination` *(8 bytes)* : Varible to *store* the weight of the unit.

## Example

Here is one example in hex:

```25 16 15 01 / 04 00 00 00 / 41 00 00 00 / 20 00 00 00 / 02 00 00 00```

Which is interpreted as:

```c
getUnitWeight((int *)iVar65, (float *)fVar2)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089298e0(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  *puVar2 = 0;
  if ((((*piVar1 != -1) &&
       (iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*piVar1,1), iVar3 != 0
       )) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 9)) &&
     (*(int *)(iVar3 + 0xcc) != 0)) {
    *puVar2 = *(undefined4 *)(*(int *)(*(int *)(iVar3 + 0xcc) + 0x1c) + 0xb0); // 0xb0 is weight
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

