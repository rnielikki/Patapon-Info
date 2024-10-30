# getCommandId

Gets currenly performing command ID.

## Code Information

- **Name**: `getCommandId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 01 00`
- **Assembly Address in Memory** : `0x8970160`

## Parameters

- `(int)Var0` *(8 bytes)* : Keep -1 to get the command ID.
- `(int *)destination` *(8 bytes)* : Variable to *store* the result, which can be [command ID](./guide/reference-table.md#command-ids).

If first parameter is less than zero (or greater than 8) and no command combo/fever is ongoing, the result value is -1.

## Example

Here is one example in hex:

```25 0c 01 00 / 02 00 00 00 / ff ff ff ff / 04 00 00 00 / 0b 00 00 00```

Which is interpreted as:

```c
getCommandId((int)-1, (int *)iVar11)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08970160(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  int *piVar4;
  undefined4 uVar5;
  int iVar6;
  int iVar7;
  int local_4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  *puVar2 = 0xffffffff;
  iVar7 = 0;
  iVar3 = Get_Some_Flag(1);
  if (*(int *)(iVar3 + 0x44) == 0) {
    iVar3 = *(int *)(param_1 + 0x10);
  }
  else {
    local_4 = *(int *)(*(int *)(iVar3 + 0x44) + 0x28);
    if (DAT_08a71d4c < local_4) {
      piVar4 = &local_4;
    }
    else {
      piVar4 = &DAT_08a71d4c;
    }
    iVar7 = *piVar4;
    iVar3 = *(int *)(param_1 + 0x10);
  }
  iVar3 = *(int *)(iVar3 + 0x158);
  if (iVar3 != 0) {
    iVar6 = *piVar1;
    if (((iVar6 < 0) || (7 < iVar6)) || (iVar7 == iVar6)) {
      iVar3 = func_0x08b72c38(iVar3 + 500);
      if (iVar3 != 0) {
        *puVar2 = *(undefined4 *)(iVar3 + 0x28);
      }
    }
    else {
      uVar5 = func_0x08b63690(iVar3 + 0x3c54);
      *puVar2 = uVar5;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

