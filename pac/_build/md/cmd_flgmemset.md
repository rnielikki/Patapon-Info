# cmd_flgMemset

Sets multiple flag values at once.

## Code Information

- **Name**: `cmd_flgMemset`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 44 00`
- **Assembly Address in Memory** : `0x883ae78`

## Parameters

- `(int)start` *(8 bytes)* : Starting flag ID to set the values.
- `(bool)value` *(8 bytes)* : Either 0 or 1, value to set to the flags.
- `(int)amount` *(8 bytes)* : Amount of flags to set from the `start`

## Example

Here is one example in hex:

```25 00 44 00 / 02 00 00 00 / 83 08 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 84 03 00 00```

Which is interpreted as:

```c
cmd_flgMemset((int)2179, (int)0, (int)900)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883ae78(undefined4 param_1,undefined4 param_2)

{
  int iVar1;
  int *piVar2;
  int *piVar3;
  int *piVar4;
  int iVar5;
  int iVar6;
  uint uVar7;
  byte *pbVar8;
  uint uVar9;
  
  iVar1 = FUN_0883c070(param_2);
  piVar2 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar3 = (int *)Pac_Get_Param(param_2,1,1,4);
  piVar4 = (int *)Pac_Get_Param(param_2,2,1,4);
  iVar5 = 0;
  if (0 < *piVar4) {
    iVar6 = *piVar2;
    while( true ) {
      uVar9 = iVar6 + iVar5 & 7;
      uVar7 = (uint)(iVar6 + iVar5) >> 3;
      if (*piVar3 == 1) {
        pbVar8 = (byte *)(*(int *)(iVar1 + 4) + uVar7);
        *pbVar8 = *pbVar8 | (byte)(1 << uVar9);
      }
      else {
        pbVar8 = (byte *)(*(int *)(iVar1 + 4) + uVar7);
        *pbVar8 = *pbVar8 & ((byte)(1 << uVar9) ^ 0xff);
      }
      iVar5 = iVar5 + 1;
      if (*piVar4 <= iVar5) break;
      iVar6 = *piVar2;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

