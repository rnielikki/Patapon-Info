# getCombo

Gets the current command combo chain.

## Code Information

- **Name**: `getCombo`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 12 00`
- **Assembly Address in Memory** : `0x8970bd4`

## Parameters

- `(int)combo_type` *(8 bytes)* : The combo type (0~2). 0 gives always total combo amount, regardless of fever. Otherwise it gives `0xb` (11) in fever.
- `(int *)destination` *(8 bytes)* : Variable to *store* the combo chain.

## Example

Here is one example in hex:

```25 0c 12 00 / 02 00 00 00 / 02 00 00 00 / 08 00 00 00 / 27 00 00 00```

Which is interpreted as:

```c
getCombo((int)2, ((global)int *)giVar39)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08970bd4(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *(int *)(*(int *)(param_1 + 0x10) + 0x158);
  *puVar2 = 0;
  if (iVar3 != 0) {
    if (*piVar1 == 0) {
      *puVar2 = *(undefined4 *)(iVar3 + 0x6bc);
    }
    else if (*piVar1 == 1) {
      *puVar2 = *(undefined4 *)(iVar3 + 0x6b8);
    }
    else {
      *puVar2 = *(undefined4 *)(iVar3 + 0x3eb0);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

