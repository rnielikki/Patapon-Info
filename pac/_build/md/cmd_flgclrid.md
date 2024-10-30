# cmd_flgClrId

Clears the specific flag ID from *variable* reference.

Check [about flag](./guide/about-flag.md) to learn about the flag.

## Code Information

- **Name**: `cmd_flgClrId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 2a 00`
- **Assembly Address in Memory** : `0x8839f88`

## Parameters

- `(uint *)flagID` *(8 bytes)* : **Variable** that stores flag ID.

## Example

Here is one example in hex:

```25 00 2a 00 / 04 00 00 00 / 0b 00 00 00```

Which is interpreted as:

```c
cmd_flgClrId((int *)iVar11)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08839f88(undefined4 param_1,undefined4 param_2)

{
  int iVar1;
  uint *puVar2;
  byte *pbVar3;
  
  iVar1 = FUN_0883c070(param_2);
  puVar2 = (uint *)Pac_Get_Param(param_2,0,1,4);
  pbVar3 = (byte *)(*(int *)(iVar1 + 4) + (*puVar2 >> 3));
  *pbVar3 = *pbVar3 & ((byte)(1 << (*puVar2 & 7)) ^ 0xff);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

