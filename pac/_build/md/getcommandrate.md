# getCommandRate

Gets how perfect the recent command was, as percent. 1/400 of [getCommandScore](./getcommandscore.md).

## Code Information

- **Name**: `getCommandRate`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 03 00`
- **Assembly Address in Memory** : `0x8970320`

## Parameters

- `(float *)destination` *(8 bytes)* : Variable to *store* the command perfection rate. 1 is all perfect, 0 if command is not ongoing.

## Example

Here is one example in hex:

```25 0c 03 00 / 20 00 00 00 / 0a 00 00 00```

Which is interpreted as:

```c
getCommandRate((float *)fVar10)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08970320(int param_1,undefined4 param_2)

{
  float *pfVar1;
  int iVar2;
  uint uVar3;
  float *pfVar4;
  int iVar5;
  float fVar6;
  
  pfVar1 = (float *)Pac_Get_Param(param_2,0,1,4);
  *pfVar1 = 0.0;
  iVar5 = *(int *)(*(int *)(param_1 + 0x10) + 0x158);
  if ((iVar5 != 0) && (iVar2 = func_0x08b72c38(iVar5 + 500), iVar2 != 0)) {
    uVar3 = *(uint *)(iVar5 + 0x6cc);
    if ((int)uVar3 < 0) {
      fVar6 = (float)(uVar3 >> 1 | uVar3 & 1);
      fVar6 = fVar6 + fVar6;
    }
    else {
      fVar6 = (float)uVar3;
    }
    *pfVar1 = fVar6 / 400.0;
    pfVar4 = pfVar1;
    if (DAT_08a71d50 <= fVar6 / 400.0) {
      pfVar4 = &DAT_08a71d50;
    }
    *pfVar1 = *pfVar4;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

