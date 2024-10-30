# cmd_flgMemcpy

Copies multiple flag values from one to another.

## Code Information

- **Name**: `cmd_flgMemcpy`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 45 00`
- **Assembly Address in Memory** : `0x883af88`

## Parameters

- `(int)destination` *(8 bytes)* : Start of the destination flag ID to put the copied values.
- `(int)source` *(8 bytes)* : Start of the source flag ID to copy.
- `(int)amount` *(8 bytes)* : Amount of flags to copy from the `source` to the `destination`.

## Example

Usage not found for this function.

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883af88(undefined4 param_1,undefined4 param_2)

{
  int iVar1;
  int *piVar2;
  int *piVar3;
  int *piVar4;
  int iVar5;
  int iVar6;
  byte *pbVar7;
  uint uVar8;
  uint uVar9;
  int iVar10;
  
  iVar1 = FUN_0883c070(param_2);
  piVar2 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,1,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,2,1,4);
  iVar5 = 0;
  if (0 < *piVar4) {
    iVar6 = *piVar3;
    while( true ) {
      iVar10 = *(int *)(iVar1 + 4);
      uVar9 = *piVar2 + iVar5 & 7;
      uVar8 = (uint)(*piVar2 + iVar5) >> 3;
      if (((int)(uint)*(byte *)(iVar10 + ((uint)(iVar6 + iVar5) >> 3)) >> (iVar6 + iVar5 & 7U) & 1U)
          == 0) {
        pbVar7 = (byte *)(iVar10 + uVar8);
        *pbVar7 = *pbVar7 & ((byte)(1 << uVar9) ^ 0xff);
      }
      else {
        pbVar7 = (byte *)(iVar10 + uVar8);
        *pbVar7 = *pbVar7 | (byte)(1 << uVar9);
      }
      iVar5 = iVar5 + 1;
      if (*piVar4 <= iVar5) break;
      iVar6 = *piVar3;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

