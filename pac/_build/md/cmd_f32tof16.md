# cmd_F32toF16

Converts from [float32](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) to [float16](https://en.wikipedia.org/wiki/Half-precision_floating-point_format).

## Code Information

- **Name**: `cmd_F32toF16`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 4c 00`
- **Assembly Address in Memory** : `0x883b474`

## Parameters

- `(int *)destination` *(8 bytes)* : int variable to save float16 result.
- `(float *)source` *(8 bytes)* : float32 value to convert.

## Remarks

Patapon 3 game mostly uses float32, float16 is uncommon case but still used.

## Example

Here is one example in hex:

```25 00 4c 00 / 08 00 00 00 / ef 01 00 00 / 20 00 00 00 / 15 00 00 00```

Which is interpreted as:

```c
cmd_F32toF16(((global)int *)giVar495, (float *)fVar21)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0883b474(undefined4 param_1,undefined4 param_2)

{
  uint *puVar1;
  uint *puVar2;
  uint uVar3;
  uint uVar4;
  
  puVar1 = (uint *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  uVar4 = *puVar2;
  uVar3 = 0;
  if (uVar4 != 0) {
    uVar3 = ((uVar4 & 0x7f800000) >> 0x17) - 0x70;
    if ((int)uVar3 < 0) {
      *puVar1 = 0;
      goto LAB_0883b520;
    }
    if (0x1f < (int)uVar3) {
      uVar3 = 0x1f;
    }
    uVar3 = (uVar4 & 0x7fffff) >> 0xd | (uVar4 & 0x80000000) >> 0x10 | (uVar3 & 0x1f) << 10;
  }
  *puVar1 = uVar3;
LAB_0883b520:
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

