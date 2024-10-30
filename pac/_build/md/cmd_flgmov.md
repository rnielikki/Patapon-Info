# cmd_flgMov

Assigns an assigned flag value to another flag.

Check [about flag](./guide/about-flag.md) to learn about the flag.

## Code Information

- **Name**: `cmd_flgMov`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 2b 00`
- **Assembly Address in Memory** : `0x883a00c`

## Parameters

- `(uint)destination` *(8 bytes)* : Flag ID to store the value.
- `(uint)value` *(8 bytes)* : Flag ID that has value to move.

## Example

Here is one example in hex:

```25 00 2b 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / c5 17 00 00```

Which is interpreted as:

```c
cmd_flgMov((int *)0, (int *)6085)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883a00c(undefined4 param_1,undefined4 param_2)

{
  int iVar1;
  uint *puVar2;
  uint *puVar3;
  byte *pbVar4;
  
  iVar1 = FUN_0883c070(param_2);
  puVar2 = (uint *)Pac_Get_Param(param_2,0,1,4);
  puVar3 = (uint *)Pac_Get_Param(param_2,1,1,4);
  Param_Print_Type(param_2,0);
  Param_Print_Type(param_2,1);
  iVar1 = *(int *)(iVar1 + 4);
  if (((int)(uint)*(byte *)(iVar1 + (*puVar3 >> 3)) >> (*puVar3 & 7) & 1U) == 0) {
    pbVar4 = (byte *)(iVar1 + (*puVar2 >> 3));
    *pbVar4 = *pbVar4 & ((byte)(1 << (*puVar2 & 7)) ^ 0xff);
  }
  else {
    pbVar4 = (byte *)(iVar1 + (*puVar2 >> 3));
    *pbVar4 = *pbVar4 | (byte)(1 << (*puVar2 & 7));
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```
