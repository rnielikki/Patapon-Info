# catLink

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `catLink`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 60 00`
- **Assembly Address in Memory** : `0x8917d20`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 17 60 00 / 04 00 00 00 / 40 00 00 00```

Which is interpreted as:

```c
catLink((int *)iVar64)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08917d20(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  undefined4 uVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*puVar1,1);
  if (iVar2 == 0) {
    iVar2 = 0;
  }
  if (iVar2 != 0) {
    *(undefined4 *)(*(int *)(iVar2 + 200) + 0x1b4) = 0;
    if (*(int *)(iVar2 + 0x100) != 0) {
      uVar3 = FUN_0887de78();
      FUN_0887b57c(uVar3,iVar2 + 0xec);
      *(undefined4 *)(iVar2 + 0x100) = 0;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

