# isEnable

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `isEnable`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 02 00`
- **Assembly Address in Memory** : `0x8910cfc`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 17 02 00 / 08 00 00 00 / 5b 00 00 00 / 08 00 00 00 / ff 01 00 00```

Which is interpreted as:

```c
isEnable(((global)int *)giVar91, ((global)int *)giVar511)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08910cfc(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  *puVar2 = 0;
  if ((*(int *)(param_1 + 0x14) != 0) &&
     (iVar3 = Find_Target_By_HandleID(*(int *)(param_1 + 0x14),*puVar1,0), iVar3 != 0)) {
    *puVar2 = 1;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

