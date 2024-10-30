# isDamaged

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `isDamaged`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 40 00`
- **Assembly Address in Memory** : `0x8915540`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(uint)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 17 40 00 / 04 00 00 00 / 0e 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
isDamaged((int *)iVar14, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08915540(int param_1,undefined4 param_2)

{
  int *piVar1;
  uint *puVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  *puVar2 = 0;
  if (*piVar1 != -1) {
    iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    if (iVar3 != 0) {
      *puVar2 = (uint)((*(byte *)(iVar3 + 0x8c) & 1) != 0);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

