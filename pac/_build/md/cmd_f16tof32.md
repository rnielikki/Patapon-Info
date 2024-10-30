# cmd_F16toF32

Converts from [float16](https://en.wikipedia.org/wiki/Half-precision_floating-point_format) to [float32](https://en.wikipedia.org/wiki/Single-precision_floating-point_format).

## Code Information

- **Name**: `cmd_F16toF32`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 4d 00`
- **Assembly Address in Memory** : `0x883b540`

## Parameters

- `(float *)destination` *(8 bytes)* : float variable to save the result.
- `(int *)source` *(8 bytes)* : float16 value to convert, however as varaible, int variable is expected.

## Remarks

Patapon 3 game mostly uses float32, float16 is uncommon case but still used.

## Example

Here is one example in hex:

```25 00 4d 00 / 20 00 00 00 / 15 00 00 00 / 08 00 00 00 / ef 01 00 00```

Which is interpreted as:

```c
cmd_F16toF32((float *)fVar21, ((global)int *)giVar495)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883b540(undefined4 param_1,undefined4 param_2)

{
  uint *puVar1;
  ushort *puVar2;
  uint uVar3;
  uint uVar4;
  
  puVar1 = (uint *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (ushort *)Pac_Get_Param(param_2,1,1,4);
  uVar3 = (uint)*puVar2;
  uVar4 = 0;
  if (uVar3 != 0) {
    uVar4 = (uVar3 & 0x3ff) << 0xd |
            (uVar3 & 0x8000) << 0x10 | (((uVar3 & 0x7c00) >> 10) + 0x70) * 0x800000;
  }
  *puVar1 = uVar4;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

