# cmd_flgSet

Sets one or more *constant* flag ID(s).

Check [about flag](./guide/about-flag.md) to learn about the flag.

## Code Information

- **Name**: `cmd_flgSet`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 27 00`
- **Assembly Address in Memory** : `0x8839d74`

## Parameters

- `(uint...)flagID` *(>= 8 bytes)* : **Immediate** value that stores flag ID. This parameter can be multiple.

## Example

Here is one example in hex:

```25 00 27 00 / 01 00 00 00 / 9c 03 00 00```

Which is interpreted as:

```c
cmd_flgSet(0x39c)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08839d74(undefined4 param_1,undefined4 param_2)

{
  int iVar1;
  int *piVar2;
  uint *puVar3;
  byte *pbVar4;
  int iVar5;
  
  iVar1 = FUN_0883c070(param_2);
  piVar2 = (int *)Pac_Get_Param(param_2,0,0,1);
  iVar5 = 0;
  if (0 < *piVar2) {
    do {
      puVar3 = (uint *)Pac_Get_Param(param_2,1,0,4);
      iVar5 = iVar5 + 1;
      pbVar4 = (byte *)(*(int *)(iVar1 + 4) + (*puVar3 >> 3));
      *pbVar4 = *pbVar4 | (byte)(1 << (*puVar3 & 7));
    } while (iVar5 < *piVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```
